<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Input from './input.svelte';
</script>

<Meta
	title="Components/Input"
	component={Input}
	argTypes={{
		value: { control: 'text' }
	}}
/>

<Template let:args>
	<Input {...args} />
</Template>

<Story name="Default" args={{ value: 'John Doe' }} />
