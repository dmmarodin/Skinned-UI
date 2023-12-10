<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { Tabs } from './types.ts';

	let className = '';
	export { className as class };
	export let id = '';
	export let selected = false;

	const tabs = getContext('tabs') as Writable<Tabs>;

	const click = () => {
		$tabs.selected = id;
	};

	$: selected = $tabs.selected === id;
</script>

<div class="sk-tabs__tab {className}" class:selected on:click={click} data-page={id}>
	<slot />
</div>
