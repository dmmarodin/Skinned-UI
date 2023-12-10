<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { Tabs } from './types.ts';
	import uniqueId from '../../utils/uniqueId.js';

	let slot: HTMLElement;
	export let label: string;
	export let isDefault = false;

	const id = uniqueId();
	const tabs = getContext('tabs') as Writable<Tabs>;

	isDefault && ($tabs.selected = id);

	$: $tabs.data[id] = { id, label, page: slot };
</script>

<div bind:this={slot}>
	<slot />
</div>
