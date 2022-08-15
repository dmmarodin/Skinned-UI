<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import TabWrapper from './TabWrapper.svelte';
	import type { Tabs } from './types';

	let className = '';
	export { className as class };

	let firstSelected = false;

	const tabs = writable({ selected: '', data: {} } as Tabs);
	setContext('tabs', tabs);

	$: firstSelected = Object.values($tabs.data)[0]?.id === $tabs.selected;

	$: if ($tabs.data && !$tabs.selected) {
		$tabs.selected = Object.values($tabs.data)[0]?.id;
	}
</script>

<div class="sk-tabs {className}">
	<div class="sk-tabs__grouping">
		{#each Object.values($tabs.data) as tab}
			<TabWrapper id={tab.id} class="sk-tabs__tab {className}" selected={$tabs.selected === tab.id}>
				{@html tab.label}
			</TabWrapper>
		{/each}
	</div>
	<div class="sk-tabs__pages" class:first={firstSelected}>
		{#each Object.values($tabs.data) as tab}
			{@html tab.page?.innerHTML}
		{/each}
	</div>
	<div class="hidden">
		<slot />
	</div>
</div>

<style>
	.hidden {
		visibility: hidden;
	}
</style>
