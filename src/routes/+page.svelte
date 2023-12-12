<script lang="ts">
	import '../lib/style/index.js';
	import '../style.css';
	import {
		Input,
		Card,
		Title,
		Button,
		TabGroup,
		Tab,
		Pill,
		Modal,
		Select,
		Checkbox,
		Switch
	} from '$lib/index.js';

	let showModal = false;
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
			<div class="">
				<Input title="Name" value="John" horizontal />
				<Input title="Name" value="John" horizontal error="Invalid username" class="mx-4" />
				<Button class="blue self-end">asd</Button>
			</div>
		</Tab>
	</TabGroup>
	<Card class="mt-4">
		<Title>Required Input</Title>
		<Input title="Name" required />
	</Card>
	<Card class="mt-4">
		<Card class="light compact inline-block">
			<Title class="compact">Badges</Title>
			<div class="flex gap-4 items-center">
				<Pill class="blue">ccc</Pill>
				<Pill class="yellow">bb</Pill>
				<Pill class="red">aaa</Pill>
				<Button class="blue self-end" on:click={() => (showModal = true)}>Show Modal</Button>
			</div>
		</Card>
		<Select title="Country" class="ml-4" nullable>
			<option>Algeria</option>
			<option>Brazil</option>
			<option>Germany</option>
			<option>Holland</option>
			<option>United States of America</option>
		</Select>
		<Checkbox title="Send Header Info" class="mx-4" />
		<Checkbox title="Save on file" class="mx-4" horizontal />
		<Switch title="Alternative Input" class="mx-4" />
		<Switch title="Alternative Output" class="mx-4" horizontal />
	</Card>
	<Modal title="Teste" show={showModal} on:close={() => (showModal = false)}>
		<p class="mb-4">This is a modal that can contain any other elements as content.</p>
		<Input title="Name" value="John" horizontal />
		<div slot="footer" class="flex justify-between gap-20">
			<Button class="red" on:click={() => (showModal = false)}>Cancel</Button>
			<Button class="blue" on:click={() => (showModal = false)}>Accept</Button>
		</div>
	</Modal>
</main>

<style>
	main {
		padding: 20px;
	}
</style>
