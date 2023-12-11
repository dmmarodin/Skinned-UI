<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ModalTitle from './ModalTitle.svelte';
	import ModalCloseButton from './ModalCloseButton.svelte';

	export let title = '';
	export let show = false;
	export let closable = true;
	let className = '';
	export { className as class };

	const dispatch = createEventDispatcher();
</script>

{#if show}
	<div class="sk-modal__background" />
	<div class="sk-modal__body {className}">
		<div class="sk-modal__header">
			<slot name="header">
				{#if title}
					<ModalTitle>{title}</ModalTitle>
				{/if}
				{#if closable}
					<ModalCloseButton on:click={() => dispatch('close', {})} />
				{/if}
			</slot>
		</div>
		<div class="sk-modal__content">
			<slot />
		</div>
		{#if $$slots.footer}
			<div class="sk-modal__footer">
				<slot name="footer" />
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.sk-modal__background {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 100vh;
		background-color: rgba($color: #000000, $alpha: 0.2);
		z-index: 2;
	}

	.sk-modal__body {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
	}
</style>
