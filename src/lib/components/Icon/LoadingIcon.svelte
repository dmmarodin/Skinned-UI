<script lang="ts">
	let className = '';
	export { className as class };

	// https://www.cssportal.com/css-loader-generator/
</script>

<div class="sk-icon {className}">
	<div class="sk-spinner" />
</div>

<style lang="scss" scoped>
	@use '../../style/colors';
	@use '../../style/mixins';

	.sk-spinner {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background:
			radial-gradient(farthest-side, #766df4 94%, #0000) top/8px 8px no-repeat,
			conic-gradient(#0000 30%, #766df4);
		-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
		animation: spinner 1s infinite linear;
	}

	@keyframes spinner {
		to {
			transform: rotate(1turn);
		}
	}
</style>
