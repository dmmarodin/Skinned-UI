<script lang="ts">
	import InputGroup from '../InputGroup/InputGroup.svelte';
	import uniqueId from '../../utils/uniqueId.js';

	export let id = '';
	export let value: boolean = false;
	export let title: string;
	export let horizontal = false;
	let className = '';
	export { className as class };

	$: inputId = id || uniqueId();
</script>

<InputGroup {title} class={className} labelFor={inputId} {horizontal}>
	<input id={inputId} type="checkbox" aria-hidden hidden bind:value />
	<button
		class="sk-switch"
		class:checked={value}
		on:click={() => (value = !value)}
		role="checkbox"
		aria-checked={value}
		tabindex="0"
	>
	</button>
</InputGroup>
