<script lang="ts">
	import ErrorIcon from '../Icon/ErrorIcon.svelte';
	import ToastContent from './ToastContent.svelte';
	import type { Toast } from './types.js';

	export let toast: Toast;
</script>

<ToastContent icon={ErrorIcon}>
	<h3 class="sk-error-color sk-toast__title">{toast.title}</h3>
	<p>{toast.content}</p>
</ToastContent>
