<script lang="ts">
	let className = '';
	export { className as class };

	export let compact = false;
</script>

<div class="sk-card {className}" class:compact>
	<slot />
</div>
