<script lang="ts">
	import SpinnerIcon from '../Icon/SpinnerIcon.svelte';
	import ToastContent from './ToastContent.svelte';
	import type { Toast } from './types.js';

	export let toast: Toast;
</script>

<ToastContent icon={SpinnerIcon}>
	<h3 class="sk-progress-color sk-toast__title">{toast.title}</h3>
	<p>{toast.content}</p>
</ToastContent>
