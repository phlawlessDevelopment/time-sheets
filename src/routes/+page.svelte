<script lang="ts">
	import RangeSlider from '../components/widgets/rangeSlider.svelte';
	import { PrevTimeRange } from '../stores';
	const today = new Date();
	const upperVal = today.getTime();
	const lowerVal = upperVal - $PrevTimeRange.range;
	console.log(upperVal, $PrevTimeRange.range);
</script>

<RangeSlider {lowerVal} {upperVal} />
