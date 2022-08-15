<script lang="ts">
	import InputGroup from '../InputGroup/InputGroup.svelte';
	import uniqueId from '../../utils/uniqueId';

	export let className = '';
	export { className as class };

	export let value = '';
	export let id = '';
	export let title = '';
	export let placeholder = '';
	export let error = '';
	export let horizontal = false;
	export let required = false;
	export let requiredText = 'required';

	$: inputId = id || uniqueId();
	$: localClass = ['sk-input', className, error && 'error'].join(' ');
	$: error = required && !value ? requiredText : '';
</script>

<InputGroup {title} labelFor={inputId} {error} {horizontal}>
	<input type="text" id={inputId} class={localClass} {placeholder} bind:value />
</InputGroup>
