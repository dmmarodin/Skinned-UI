<script lang="ts">
	import '@skinned-ui/style';
	import '../style.css';
	import { Input, Card } from '$lib';
</script>

<main class="">
	<Card>
		<Input title="Username" value="John" />
		<div style="width: 10px;display:inline-block;" />
		<Input title="Username" value="John" horizontal />
		<Input title="Username" value="John" horizontal error="asdasd" />
	</Card>
</main>

<style>
	main {
		padding: 35px;
	}
</style>
