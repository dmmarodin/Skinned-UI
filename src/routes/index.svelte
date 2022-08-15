<script lang="ts">
	import '@skinned-ui/style';
	import '../style.css';
	import { Input, Card, Title, Button } from '$lib';
</script>

<main>
	<Card>
		<Title>Vertical Input</Title>
		<div class="flex gap-4">
			<Input title="Username" value="John" placeholder="name" />
			<Input title="Username" value="John" error="Invalid username" />
			<Button class="blue outline self-end">asd</Button>
		</div>
	</Card>
	<Card class=" mt-4">
		<Title>Horizontal Input</Title>
		<div class="flex gap-4">
			<Input title="Username" value="John" horizontal />
			<Input title="Username" value="John" horizontal error="Invalid username" />
			<Button class="blue self-end">asd</Button>
		</div>
	</Card>
	<Card class="mt-4">
		<Title>Required Input</Title>
		<Input title="Username" required />
	</Card>
</main>

<style>
	main {
		padding: 20px;
	}
</style>
