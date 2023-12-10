<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="sk-card {className}">
	<slot />
</div>
