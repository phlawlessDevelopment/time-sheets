<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { Breadcrumbs } from '../stores';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		{#each $Breadcrumbs as crumb, i}
			{#if i < $Breadcrumbs.length - 1}
				<li class="crumb"><a class="anchor" href={crumb.link}>{crumb.label}</a></li>
				<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			{:else}
				<li class="crumb">{crumb.label}</li>
			{/if}
		{/each}
	</svelte:fragment>
	<svelte:fragment slot="trail">(my links)</svelte:fragment>
</AppBar>
