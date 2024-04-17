<script lang="ts">
	import { toastStore } from './ToastStore.js';
	import Toast from './ToastItem.svelte';

	$: items = $toastStore;
</script>

<div class="sk-toast__container">
	{#each Object.values(items) as item (item.id)}
		<Toast {item} />
	{/each}
</div>
