<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import '@skinned-ui/style';
	import Button from './button.svelte';
</script>

<Meta title="skinned-ui/Button" component={Button} />

<Story name="Default">
	<Button>Save</Button>
</Story>
