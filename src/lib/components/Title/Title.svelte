<script lang="ts">
	let className = '';
	export let compact = false;
	export { className as class };
</script>

<h2 class="sk-title" class:className class:compact>
	<slot />
</h2>
