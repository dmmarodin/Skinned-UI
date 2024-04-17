<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { toastStore } from './ToastStore.js';
	import { Toast } from './types.js';

	export let item: Toast;

	const progress = tweened(0, { duration: item.opts.duration });

	onMount(() => {
		if (item.opts.duration) {
			progress.set(1).then(() => {
				toastStore.delete(item.id);
				item.opts.onClose && item.opts.onClose();
			});
		}
	});

	const onClick = () => {
		if (item.opts.onClick) {
			item.opts.onClick();
		}
	};

	const onClickClose = () => {
		toastStore.delete(item.id);
		item.opts.onClose && item.opts.onClose();
	};
</script>

<div
	aria-hidden
	on:click={() => onClick()}
	class="sk-toast min-w-[300px]"
	class:clickable={item.opts.onClick}
	transition:slide
>
	<div class="sk-toast__wrapper">
		<svelte:component this={item.component} toast={item} />
		<div aria-hidden class="sk-toast__close" on:click={onClickClose}>
			<div class="sk-toast__close__icon" />
		</div>
	</div>
	{#if item.opts.progress}
		<div class="sk-toast__progress-bar" style:width={$progress * 100 + '%'} />
	{/if}
</div>
