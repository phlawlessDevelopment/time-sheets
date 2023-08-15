<script lang="ts">
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import '../theme.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import TopBar from '../components/widgets/topBar.svelte';
	import SideBar from '../components/widgets/sideBar.svelte';
	import Footer from '../components/footer.svelte';
	import PageHeader from '../components/pageHeader.svelte';
	import { page } from '$app/stores';
	import { Breadcrumbs } from '../stores';
	import type { Breadcrumb } from '../stores';

	page.subscribe((p) => {
		const breadcrumbs: Breadcrumb[] = [{ label: 'home', link: '/' }];
		const pathSegments = p.url.pathname.split('/').filter((s) => s.length > 0);
		for (let i = 0; i < pathSegments.length; i++) {
			const link = '/' + pathSegments.slice(0, i + 1).join('/');
			breadcrumbs.push({ label: pathSegments[i], link });
		}
		Breadcrumbs.set(breadcrumbs);
	});
</script>

<AppShell>
	<svelte:fragment slot="header"><TopBar /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><SideBar /></svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader"><PageHeader /></svelte:fragment>
	<div class="p-8">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
