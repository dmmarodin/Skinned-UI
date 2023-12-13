<script lang="ts">
	import { toast } from './ToastStore.ts';
	import Toast from './Toast.svelte';

	let items = new Array();
	$: items = $toast;
</script>

<div class="sk-toast__container">
	{#each items as item (item.id)}
		<Toast {item} />
	{/each}
</div>
