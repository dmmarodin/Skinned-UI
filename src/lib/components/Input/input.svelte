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

	$: inputId = id || uniqueId();
	$: localClass = ['sk-input', className, error && 'error'].join(' ');
</script>

<InputGroup {title} labelFor={inputId} {error}>
	<input type="button" id={inputId} class={localClass} {placeholder} bind:value />
</InputGroup>
