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
	<div class="grid grid-cols-2 gap-4">
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
				</div>
			</Tab>
		</TabGroup>

		<Card class="compact">
			<Title>Pills & Badges</Title>
			<div class="flex gap-4 items-center">
				<Pill class="red">red</Pill>
				<Pill class="yellow">yellow</Pill>
				<Pill class="blue">blue</Pill>
				<Pill class="purple">purple</Pill>
				<Pill class="green">green</Pill>
				<Pill class="mute">muted</Pill>
			</div>
		</Card>
	</div>
	<div class="mt-4 flex gap-4">
		<Card class="light compact">
			<Title class="compact">Light background</Title>
			<div class="flex gap-4">
				<div class="inline-flex flex-col gap-2">
					<Input title="Normal" />
					<Input title="Required" required />
					<Input title="Disabled" disabled />
				</div>
				<div class="inline-flex flex-col gap-2">
					<Select title="Country" class="ml-4" nullable>
						<option>Algeria</option>
						<option>Brazil</option>
						<option>Germany</option>
						<option>Holland</option>
						<option>United States of America</option>
					</Select>
					<Checkbox title="Send Header Info" class="mx-4" />
					<Switch title="Alternative Input" class="mx-4" />
				</div>
			</div>
		</Card>
		<Card class="compact">
			<Title class="compact">Mid background</Title>
			<div class="flex gap-4">
				<div class="inline-flex flex-col gap-2">
					<Input title="Normal" />
					<Input title="Required" required />
					<Input title="Disabled" disabled />
				</div>
				<div class="inline-flex flex-col gap-2">
					<Select title="Country" class="ml-4" nullable>
						<option>Algeria</option>
						<option>Brazil</option>
						<option>Germany</option>
						<option>Holland</option>
						<option>United States of America</option>
					</Select>
					<Checkbox title="Send Header Info" class="mx-4" />
					<Switch title="Alternative Input" class="mx-4" />
				</div>
			</div>
		</Card>
		<Card class="dark compact">
			<Title class="compact">Dark background</Title>
			<div class="flex gap-4">
				<div class="inline-flex flex-col gap-2">
					<Input title="Normal" />
					<Input title="Required" required />
					<Input title="Disabled" disabled />
				</div>
				<div class="inline-flex flex-col gap-2">
					<Select title="Country" class="ml-4" nullable>
						<option>Algeria</option>
						<option>Brazil</option>
						<option>Germany</option>
						<option>Holland</option>
						<option>United States of America</option>
					</Select>
					<Checkbox title="Send Header Info" class="mx-4" />
					<Switch title="Alternative Input" class="mx-4" />
				</div>
			</div>
		</Card>
	</div>

	<Card class="mt-4">
		<div class="flex gap-2">
			<Button class="red" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="yellow" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="blue" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="purple" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="green" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="mute" on:click={() => (showModal = true)}>Show Modal</Button>
		</div>
		<div class="flex gap-2 mt-2">
			<Button class="red outline" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="yellow outline" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="blue outline" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="purple outline" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="green outline" on:click={() => (showModal = true)}>Show Modal</Button>
			<Button class="mute outline" on:click={() => (showModal = true)}>Show Modal</Button>
		</div>
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
