<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="sk-icon {className}">
	<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M16 0C7.1625 0 0 7.38633 0 16.5C0 25.6137 7.1625 33 16 33C24.8375 33 32 25.6137 32 16.5C32 7.38633 24.8375 0 16 0ZM14.5 9.79688C14.5 8.94609 15.175 8.25 16 8.25C16.825 8.25 17.5 8.94287 17.5 9.79688V18.0469C17.5 18.9009 16.8281 19.5938 16 19.5938C15.1719 19.5938 14.5 18.9041 14.5 18.0469V9.79688ZM16 25.7812C14.915 25.7812 14.035 24.8738 14.035 23.7548C14.035 22.6359 14.9144 21.7284 16 21.7284C17.0856 21.7284 17.965 22.6359 17.965 23.7548C17.9625 24.8725 17.0875 25.7812 16 25.7812Z"
		/>
	</svg>
</div>

<style lang="scss" scoped>
	@use '../../style/colors';
	@use '../../style/mixins';

	svg path {
		fill: colors.$accent-red;
	}
</style>
