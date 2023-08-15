<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { PrevTimeRange } from '../../stores';

	export let lowerVal: number;
	export let upperVal: number;
	const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	let dispatch = createEventDispatcher();

	const twelveHours = 12 * 60 * 60 * 1000;
	const oneMin = 60 * 1000;
	let min = upperVal - twelveHours;
	let max = upperVal + twelveHours - oneMin;

	$: lowerDisplay = `${new Date(lowerVal).toLocaleTimeString()} (${
		days[new Date(lowerVal).getDay()]
	})`;
	$: upperDisplay = `${new Date(upperVal).toLocaleTimeString()} (${
		days[new Date(upperVal).getDay()]
	})`;
	$: range = new Date(upperVal - lowerVal);
	handleUpper();

	function handleUpper() {
		if (upperVal < lowerVal + 1) {
			lowerVal = upperVal - 1;
		}
	}

	function handleLower() {
		if (lowerVal > upperVal - 1) {
			upperVal = lowerVal + 1;
		}
	}

	function handleSubmit() {
		PrevTimeRange.set({ range: range.getTime() });
	}
</script>

<div class="flex flex-col gap-4 p-4 card variant-ghost-primary">
	<div class="w-full flex justify-between">
		<div class="h3 card p-2">How long did you work?</div>
	</div>
	<span class="multi-range">
		<input
			type="range"
			class="bg-error-500 variant-filled-error"
			{min}
			{max}
			bind:value={lowerVal}
			on:input={handleLower}
		/>
		<input type="range" {min} {max} bind:value={upperVal} on:input={handleUpper} />
	</span>
	<div>
		<hr class="my-2" />
		{`From ${lowerDisplay} to ${upperDisplay}`}
		<br />
		<div class="card p-2 my-2">
			Total: {`${range.getUTCHours()}:${range.getUTCMinutes()}`}
		</div>
	</div>
	<button class="btn variant-filled-secondary" on:click={handleSubmit}>Sumbit</button>
</div>

<style lang="less">
	input[type='range'] {
		box-sizing: border-box;
		appearance: none;
		width: 100%;
		margin: 0;
		padding: 0 2px;
		/* Add some L/R padding to ensure box shadow of handle is shown */
		overflow: hidden;
		border: 0;
		border-radius: 1px;
		outline: none;
		background: linear-gradient(rgb(var(--color-tertiary-500)), rgb(var(--color-tertiary-500)))
			no-repeat center;
		/* Use a linear gradient to generate only the 2px height background */
		background-size: 100% 4px;
		pointer-events: none;

		&:active,
		&:focus {
			outline: none;
		}

		&::-webkit-slider-thumb {
			height: 28px;
			width: 28px;
			border-radius: 28px;
			position: relative;
			margin: 5px 0;
			/* Add some margin to ensure box shadow is shown */
			cursor: pointer;
			appearance: none;
			pointer-events: all;
			background-color: rgb(var(--color-secondary-500));
			box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
			&::before {
				content: ' ';
				display: block;
				position: absolute;
				top: 13px;
				left: 100%;
				width: 2000px;
				height: 2px;
			}
		}
	}

	.multi-range {
		position: relative;
		height: 50px;

		input[type='range'] {
			position: absolute;

			&:nth-child(1) {
				&::-webkit-slider-thumb::before {
					background-color: red;
				}
			}

			&:nth-child(2) {
				background: none;

				&::-webkit-slider-thumb::before {
					background-color: grey;
				}
			}
		}
	}
</style>
