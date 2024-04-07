<script lang="ts">
	import { toast } from './ToastStore.js';
	import type { Toast } from './types.ts';
	import { tweened } from 'svelte/motion';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let item: Toast;

	const progress = tweened(0, { duration: item.opts.duration });

	onMount(() => {
		if (item.opts.duration) {
			progress.set(1).then(() => {
				toast.delete(item.id);
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
		toast.delete(item.id);
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
		{#if item.opts.icon}
			<div class="sk-toast__icon__wrapper">
				<svelte:component this={item.opts.icon} />
			</div>
		{/if}
		<div class="sk-toast__content flex-1">
			<!-- {#if item.title}
				<h3 class="sk-toast__title">{item.title}</h3>
			{/if}
			<p>
				{item.content}
			</p> -->
			<svelte:component this={item.component} {...item.props} />
		</div>
		<div aria-hidden class="sk-toast__close" on:click={onClickClose}>
			<div class="sk-toast__close__icon" />
		</div>
	</div>
	<div class="sk-toast__progress-bar" style:width={$progress * 100 + '%'} />
</div>
