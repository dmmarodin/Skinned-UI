<script lang="ts">
	import ToastIcon from './ToastIcon.svelte';
	import type { Component } from './types.js';

	export let icon: Component | null = null;
</script>

{#if icon}
	<ToastIcon {icon} />
{/if}
<div class="sk-toast__content flex-1">
	<slot />
</div>
