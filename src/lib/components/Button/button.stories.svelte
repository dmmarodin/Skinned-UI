<script>
	import Button from './button.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import '@skinned-ui/style';
</script>

<Meta
	title="Components/Button"
	component={Button}
	argTypes={{
		label: { control: 'text' }
	}}
/>

<Template let:args>
	<Button>{args.label}</Button>
</Template>

<Story name="Default" args={{ label: 'Save' }} />
