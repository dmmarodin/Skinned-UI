<script lang="ts">
	import '../lib/style/index.js';
	import '../style.css';
	import { Input, Card, Title, Button, TabGroup, Tab, Pill } from '$lib/index.js';
</script>

<main>
	<TabGroup>
		<Tab label="a">
			<Title>Vertical Input</Title>
			<div class="flex gap-4">
				<Input title="Name" value="John" placeholder="name" />
				<Input title="Name" value="John" error="Invalid username" />
				<Button class="blue outline self-end">asd</Button>
			</div>
		</Tab>
		<Tab label="b" isDefault>
			<Title>Horizontal Input</Title>
			<div class="flex gap-4">
				<Input title="Name" value="John" horizontal />
				<Input title="Name" value="John" horizontal error="Invalid username" />
				<Button class="blue self-end">asd</Button>
			</div>
		</Tab>
	</TabGroup>
	<Card class="mt-4">
		<Title>Required Input</Title>
		<Input title="Name" required />
	</Card>
	<Card class="mt-4">
		<Card class="light inline-block" compact>
			<Title compact>Badges</Title>
			<Pill class="blue">ccc</Pill>
			<Pill class="yellow">bb</Pill>
			<Pill class="red">aaa</Pill>
		</Card>
	</Card>
</main>

<style>
	main {
		padding: 20px;
	}
</style>
