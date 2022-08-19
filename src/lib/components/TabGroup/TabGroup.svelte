<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import PageWrapper from './PageWrapper.svelte';
	import TabWrapper from './TabWrapper.svelte';
	import type { Tabs, TabMode } from './types';

	let className = '';
	export { className as class };
	export let mode: TabMode = 'diplay';

	let firstSelected = false;

	const tabs = writable({ selected: null, data: {}, mode } as Tabs);
	const height = writable(20);
	setContext('tabs', tabs);
	setContext('height', height);

	$: firstSelected = Object.values($tabs.data)[0]?.id === $tabs.selected;
	$: $tabs.mode = mode;

	$: if (!$tabs.selected) {
		$tabs.selected = Object.values($tabs.data)[0]?.id;
	}
</script>

<div class="sk-tabs {className}">
	<div class="sk-tabs__grouping">
		{#each Object.values($tabs.data) as tab}
			<TabWrapper id={tab.id} class="sk-tabs__tab {className}">
				{@html tab.label}
			</TabWrapper>
		{/each}
	</div>
	<div class="sk-tabs__pages" class:first={firstSelected}>
		<div class="sk-tabs__pages-wrapper" style="height:{$height ? `${$height}px` : 'auto'}">
			{#each Object.values($tabs.data) as tab}
				<PageWrapper id={tab.id}>
					{@html tab.page?.innerHTML}
				</PageWrapper>
			{/each}
		</div>
	</div>
	<div style="visibility:hidden; diplay:none; height:0;">
		<slot />
	</div>
</div>
