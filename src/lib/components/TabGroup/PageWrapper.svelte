<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { Tabs } from './types';

	export let id = '';
	let selected: boolean;
	let element: HTMLElement;

	const tabs = getContext('tabs') as Writable<Tabs>;
	const height = getContext('height') as Writable<number>;

	$: selected = $tabs.selected === id;

	$: if ($tabs.selected === id) {
		setTimeout(() => {
			$height = element?.clientHeight || $height;
		}, 200);
	}
</script>

<div
	class="sk-tabs__page"
	class:selected
	class:unselected={selected && !selected}
	data-page={id}
	bind:this={element}
>
	<slot />
</div>
