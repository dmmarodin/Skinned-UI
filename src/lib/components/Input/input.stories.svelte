<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Input from './Input.svelte';
	import '@skinned-ui/style';
</script>

<Meta
	title="Components/Input"
	component={Input}
	argTypes={{
		value: { control: 'text' },
		title: { control: 'text' },
		placeholder: { control: 'text' },
		error: { control: 'text' },
		horizontal: { control: 'boolean' },
		required: { control: 'boolen' }
	}}
/>

<Template let:args>
	<Input {...args} />
</Template>

<Story name="Default" args={{ placeholder: 'Type your name here...' }} />
<Story name="Value" args={{ value: 'John Doe' }} />
<Story
	name="Horizontal Labeled"
	args={{ value: 'John Doe', title: 'Username', horizontal: true }}
/>
<Story
	name="Horizontal Error"
	args={{ value: 'John Doe', title: 'Username', horizontal: true, error: 'Invalid username' }}
/>
<Story name="Vertical Labeled" args={{ value: 'John Doe', title: 'Username' }} />
<Story
	name="Vertical Error"
	args={{ value: 'John Doe', title: 'Username', error: 'Invalid username' }}
/>
<Story name="Required" args={{ title: 'Username', required: true }} />
