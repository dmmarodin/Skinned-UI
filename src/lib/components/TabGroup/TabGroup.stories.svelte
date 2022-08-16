<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import TabGroup from './TabGroup.svelte';
	import Tab from './Tab.svelte';
	import '@skinned-ui/style';
</script>

<Meta title="Components/TabGroup" component={TabGroup} argTypes={{}} />

<Template id="default" let:args>
	<TabGroup {...args}>
		<Tab label="a">content 1</Tab>
		<Tab label="b">content 2</Tab>
	</TabGroup>
</Template>

<Template id="default-option" let:args>
	<TabGroup {...args}>
		<Tab label="a">this is not a default tab</Tab>
		<Tab label="b" isDefault>this tab is set as 'isDefault'</Tab>
	</TabGroup>
</Template>

<Story name="Default" template="default" args={{}} />
<Story name="Default open tab" template="default-option" args={{}} />
