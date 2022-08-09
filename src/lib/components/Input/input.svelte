<script lang="ts">
	import InputGroup from '../InputGroup/InputGroup.svelte';
	import uniqueId from '../../utils/uniqueId';

	export let className = '';
	export { className as class };

	export let value = '';
	export let id = '';
	export let title = '';

	$: inputId = id || uniqueId();
	$: localClass = `sk-input ${className}`;
</script>

<InputGroup {title} labelFor={inputId}>
	<input type="button" id={inputId} class={localClass} {value} />
</InputGroup>
