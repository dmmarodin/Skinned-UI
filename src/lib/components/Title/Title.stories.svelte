<script>
	import Title from './Title.svelte';
	import { Card } from '../../index';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import '@skinned-ui/style';
</script>

<Meta
	title="Components/Title"
	component={Title}
	argTypes={{
		content: { control: 'text' }
	}}
/>

<Template id="default" let:args>
	<Title>{args.content}</Title>
</Template>

<Template id="card" let:args>
	<Card>
		<Title>{args.content}</Title>
	</Card>
</Template>

<Story name="Default" template="default" args={{ content: 'My Title' }} />
<Story name="On card" template="card" args={{ content: 'My Title' }} />
