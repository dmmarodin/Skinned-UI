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
		error: { control: 'boolean' }
	}}
/>

<Template let:args>
	<Input {...args} />
</Template>

<Story name="Default" args={{ value: 'John Doe' }} />
<Story name="Side Labeled" args={{ value: 'John Doe', title: 'Username' }} />
<Story name="Top Labeled" args={{ value: 'John Doe', title: 'Username' }} />
<Story name="Error" args={{ value: 'John Doe', title: 'Username', error: 'Invalid username' }} />
