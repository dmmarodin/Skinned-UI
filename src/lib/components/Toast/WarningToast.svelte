<script lang="ts">
	import WarningIcon from '../Icon/WarningIcon.svelte';
	import ToastContent from './ToastContent.svelte';
	import type { Toast } from './types.js';

	export let toast: Toast;
</script>

<ToastContent icon={WarningIcon}>
	<h3 class="sk-warning-color sk-toast__title">{toast.title}</h3>
	<p>{toast.content}</p>
</ToastContent>
