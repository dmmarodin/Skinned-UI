<script lang="ts">
	export let className = '';
	export let value = '';
	export { className as class };

	console.log(value);
</script>

<input type="button" class="sk-input {className}" {value} />

<style>
	input {
		outline: 0;
		border: none;
	}
</style>
