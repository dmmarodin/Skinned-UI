<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { Tabs } from './types.ts';

	export let id = '';
	let selected: boolean;
	let element: HTMLElement;
	let style: string;

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
	style:visibility={$tabs.mode === 'visibility' && !selected ? 'hidden' : ''}
	style:display={$tabs.mode === 'diplay' && !selected ? 'none' : ''}
	style:opacity={$tabs.mode === 'opacity' && !selected ? '0' : ''}
	style:position={$tabs.mode !== 'none' && !selected ? 'absolute' : ''}
>
	<slot />
</div>
