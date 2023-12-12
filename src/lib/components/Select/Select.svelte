<script lang="ts">
	import InputGroup from '../InputGroup/InputGroup.svelte';
	import uniqueId from '../../utils/uniqueId.js';

	export let id = '';
	export let value = '';
	export let title: string;
	export let error = '';
	export let nullable = false;
	export let horizontal = false;
	export let required = false;
	export let requiredText = 'required';
	let className = '';
	export { className as class };

	$: inputId = id || uniqueId();
	$: localClass = ['sk-select', error && 'error'].join(' ');
	$: error = required && !value ? requiredText : '';
</script>

<InputGroup {title} class={className} labelFor={inputId} {error} {horizontal}>
	<div class="sk-select__wrapper">
		<select class={localClass} bind:value>
			{#if nullable}
				<option value=""></option>
			{/if}
			<slot />
		</select>
		<div class="sk-select__caret" />
	</div>
</InputGroup>
