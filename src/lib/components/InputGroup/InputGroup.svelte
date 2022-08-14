<script lang="ts">
	export let title = '';
	export let labelFor = '';
	export let error = '';
	export let horizontal = true;

	let className = '';
	export { className as class };
</script>

<div class="sk-input__group {className}" class:horizontal>
	<div class="sk-input__line">
		{#if horizontal}
			<div class="sk-input__left">
				<label class="sk-input__label {error && 'error'}" for={labelFor}>{title}</label>
			</div>
		{:else}
			<div class="sk-input__top">
				<label class="sk-input__label {error && 'error'}" for={labelFor}>{title}</label>
				<span class="sk-input__error">{error}</span>
			</div>
		{/if}
	</div>
	<slot />
	{#if horizontal}
		<div class="sk-input__bottom">
			<span class="sk-input__error">{error}</span>
		</div>
	{/if}
</div>
