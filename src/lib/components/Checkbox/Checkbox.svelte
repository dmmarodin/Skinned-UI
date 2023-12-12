<script lang="ts">
	import InputGroup from '../InputGroup/InputGroup.svelte';
	import uniqueId from '../../utils/uniqueId.js';

	export let id = '';
	export let value: boolean = false;
	export let disabled = false;
	export let title: string;
	export let horizontal = false;
	let className = '';
	export { className as class };

	$: inputId = id || uniqueId();
</script>

<InputGroup {title} class={className} labelFor={inputId} {horizontal} {disabled}>
	<input id={inputId} type="checkbox" aria-hidden hidden bind:value disabled />
	<button
		class="sk-checkbox"
		class:disabled
		on:click={() => !disabled && (value = !value)}
		role="checkbox"
		aria-checked={value}
		tabindex={disabled ? -1 : 0}
	>
		{#if value}
			<div class="sk-checkbox__check" />
		{/if}
	</button>
</InputGroup>
