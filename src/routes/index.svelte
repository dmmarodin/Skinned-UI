<script lang="ts">
	import '@skinned-ui/style';
	import '../style.css';
	import { Input, Card, Title } from '$lib';
</script>

<main>
	<Card>
		<Title>Vertical Input</Title>
		<div class="flex gap-4">
			<Input title="Username" value="John" />
			<Input title="Username" value="John" error="Invalid username" />
		</div>
	</Card>
	<Card class=" mt-4">
		<Title>Horizontal Input</Title>
		<div class="flex gap-4">
			<Input title="Username" value="John" horizontal />
			<Input title="Username" value="John" horizontal error="Invalid username" />
		</div>
	</Card>
	<Card class="mt-4">
		<Title>Required Input</Title>
		<Input title="Username" value="John" error="Invalid username" />
	</Card>
</main>

<style>
	main {
		padding: 35px;
	}
</style>
