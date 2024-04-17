<script lang="ts">
	import type { Component } from './types.js';

	export let icon: Component;
</script>

<div class="sk-toast__icon__wrapper">
	<svelte:component this={icon} />
</div>
