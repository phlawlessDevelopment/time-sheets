<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(my logo)</svelte:fragment>
	(company name)
	<svelte:fragment slot="trail">(my links)</svelte:fragment>
</AppBar>
