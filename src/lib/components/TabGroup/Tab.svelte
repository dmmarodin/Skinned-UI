<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { Tabs } from './types';
	import uniqueId from '$lib/utils/uniqueId';

	let slot: HTMLElement;
	let className = '';
	export { className as class };

	export let isDefault = false;
	export let label: string;

	const id = uniqueId();
	const tabs = getContext('tabs') as Writable<Tabs>;

	isDefault && ($tabs.selected = id);

	$: $tabs.data[id] = { id, label, page: slot };
</script>

<div bind:this={slot}>
	<div {id} class="sk-tabs__page {className}" hidden={$tabs.selected !== id}>
		<slot />
	</div>
</div>
