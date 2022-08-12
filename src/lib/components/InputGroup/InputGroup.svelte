<script lang="ts">
	export let className = '';
	export let title = '';
	export let labelFor = '';
	export let error = '';
	export { className as class };
</script>

<div type="button" class="sk-input__group {className}">
	<label class="sk-input__label" for={labelFor}>{title}</label>
	<slot />
</div>

<style>
</style>
