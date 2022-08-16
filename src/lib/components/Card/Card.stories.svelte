<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Card from './Card.svelte';
	import '@skinned-ui/style';
</script>

<Meta title="Components/Card" component={Card} argTypes={{}} />

<Template let:args>
	<Card {...args} />
</Template>

<Story name="Default" args={{}} />
