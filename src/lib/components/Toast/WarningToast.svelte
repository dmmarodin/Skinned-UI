<script lang="ts">
	export let title: string;
	export let content: string;
	import Title from '../Title/Title.svelte';
</script>

<div>
	<h3 class="sk-warning-color sk-toast__title">{title}</h3>
	<p>{content}</p>
</div>
