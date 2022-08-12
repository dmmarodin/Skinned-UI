<script lang="ts">
	export let className = '';
	export let title = '';
	export let labelFor = '';
	export let error = '';
	export { className as class };
</script>

<div type="button" class="sk-input__group {className}">
	<div class="sk-input__line">
		<label class="sk-input__label {error && 'error'}" for={labelFor}>{title}</label>
		<span class="sk-input__error">{error}</span>
	</div>
	<slot />
</div>

<style>
</style>
