<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<AppRail>
	<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>(icon)</AppRailAnchor>
	<AppRailAnchor href="/about" selected={$page.url.pathname === '/about'}>(icon)</AppRailAnchor>
</AppRail>
