<script lang="ts">
	import CheckIcon from '../Icon/CheckIcon.svelte';
	import ToastContent from './ToastContent.svelte';
	import type { Toast } from './types.js';

	export let toast: Toast;
</script>

<ToastContent icon={CheckIcon}>
	<h3 class="sk-success-color sk-toast__title">{toast.title}</h3>
	<p>{toast.content}</p>
</ToastContent>
