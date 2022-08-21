<script lang="ts">
	import Button from './button.svelte';
	export let title = '';
	export let onclick = () => {};
</script>

<div>
	<Button {...$$restProps} on:click={onclick}>{title}</Button>
</div>
