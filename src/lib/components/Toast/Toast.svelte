<script lang="ts">
	import { toast } from './ToastStore.ts';
	import { Toast } from './types';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';

	export let item: Toast;

	const progress = tweened(0, { duration: item.opts.duration });

	onMount(() => {
		if (item.opts.duration) {
			progress.set(1).then(() => {
				toast.delete(item.id);
				item.opts.onClose && items.opts.onClose();
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
		item.opts.onClose && items.opts.onClose();
	};
</script>

<div
	aria-hidden
	on:click={() => onClick(item)}
	class="sk-toast"
	class:clickable={item.opts.onClick}
>
	<div class="flex items-start gap-6">
		<p class="sk-toast__content flex-1">
			{item.content}
		</p>
		{#if !item.opts.duration}
			<div aria-hidden class="sk-toast__close" on:click={onClickClose}>
				<div class="sk-toast__close__icon" />
			</div>
		{/if}
	</div>
	<div class="sk-toast__progress-bar" style:width={$progress * 100 + '%'} />
</div>
