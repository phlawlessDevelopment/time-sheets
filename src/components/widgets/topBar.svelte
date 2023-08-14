<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(app logo)</svelte:fragment>
	(app name)
	<svelte:fragment slot="trail">(nav links)</svelte:fragment>
</AppBar>
