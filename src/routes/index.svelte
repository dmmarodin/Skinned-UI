<script lang="ts">
	import '@skinned-ui/style';
	import '../style.css';
	import { Input, Card } from '$lib';
</script>

<main class="">
	<Card>
		<Input title="Username" value="John" />
		<div style="width: 10px;display:inline-block;" />
		<Input title="Username" value="John" error="Invalid username" />
		<div style="width: 10px;display:inline-block;" />
		<Input title="Username" value="John" horizontal />
		<div style="width: 10px;display:inline-block;" />
		<Input title="Username" value="John" horizontal error="Invalid username" />
	</Card>
	<Card class="mt-4">
		<Input title="Username" value="John" horizontal error="Invalid username" />
		<div style="width: 10px;display:inline-block;" />
	</Card>
</main>

<style>
	main {
		padding: 35px;
	}
</style>
