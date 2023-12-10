<script lang="ts">
	export let className = '';
	export { className as class };
</script>

<button type="button" class="sk-button {className}" on:click {...$$restProps}><slot /></button>

<style>
	button {
		outline: 0;
		border: none;
	}
</style>
