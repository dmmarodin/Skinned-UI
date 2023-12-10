<script lang="ts">
	export let className = '';
	export { className as class };
</script>

<div class="sk-pill {className}">
	<slot />
</div>
