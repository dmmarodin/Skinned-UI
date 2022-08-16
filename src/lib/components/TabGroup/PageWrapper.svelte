<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { Tabs } from './types';

	export let id = '';
	let selected: boolean;

	const tabs = getContext('tabs') as Writable<Tabs>;

	$: selected = $tabs.selected === id;
</script>

<div class="sk-tabs__page" class:selected class:unselected={selected && !selected} data-page={id}>
	<slot />
</div>
