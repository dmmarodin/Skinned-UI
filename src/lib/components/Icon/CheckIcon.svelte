<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="sk-icon {className}">
	<svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_35_2872)">
			<path
				d="M35.2446 8.44017C36.2491 9.44114 36.2491 11.0587 35.2446 12.0597L14.6732 32.5597C13.6688 33.5607 12.0455 33.5607 11.0411 32.5597L0.753107 22.3097C-0.251036 21.3087 -0.251036 19.6911 0.753107 18.6902C1.75741 17.6892 3.38545 17.6892 4.38991 18.6902L12.7848 27.1224L31.6125 8.44017C32.617 7.43759 34.2402 7.43759 35.2446 8.44017Z"
				fill="#3B9181"
			/>
		</g>
		<defs>
			<clipPath id="clip0_35_2872">
				<rect width="36" height="41" fill="white" />
			</clipPath>
		</defs>
	</svg>
</div>

<style lang="scss" scoped>
	@use '../../style/colors';
	@use '../../style/mixins';

	svg path {
		fill: colors.$accent-green;
	}
</style>
