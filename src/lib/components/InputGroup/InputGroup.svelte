<script lang="ts">
	export let className = '';
	export let title = '';
	export let labelFor = '';
	export { className as class };
</script>

<div type="button" class="sk-input-group {className}">
	<label class="sk-input-group__label" for={labelFor}>{title}</label>
	<slot />
</div>

<style>
</style>
