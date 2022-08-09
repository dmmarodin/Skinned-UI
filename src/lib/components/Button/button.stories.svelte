<script>
	import Button from './Button.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import '@skinned-ui/style';

	function getClass(args) {
		const classes = [...(args.outline ? ['outline'] : [])];
		return classes.join(' ');
	}
</script>

<Meta
	title="Components/Button"
	component={Button}
	argTypes={{
		label: { control: 'text' },
		outline: { control: 'boolean' }
	}}
/>

<Template id="all" let:args>
	<Button>{args.label}</Button>
	<Button class={`blue ${getClass(args)}`}>{args.label}</Button>
	<Button class={`purple ${getClass(args)}`}>{args.label}</Button>
	<Button class={`green ${getClass(args)}`}>{args.label}</Button>
	<Button class={`red ${getClass(args)}`}>{args.label}</Button>
</Template>

<Template id="outline" let:args>
	<Button class={`blue ${getClass(args)}`}>{args.label}</Button>
	<Button class={`purple ${getClass(args)}`}>{args.label}</Button>
	<Button class={`green ${getClass(args)}`}>{args.label}</Button>
	<Button class={`red ${getClass(args)}`}>{args.label}</Button>
</Template>

<Story name="Default" template="all" args={{ label: 'Save' }} />
<Story name="Outline" template="outline" args={{ label: 'Save', outline: true }} />
