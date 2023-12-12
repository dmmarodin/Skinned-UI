<script lang="ts">
	export let title = '';
	export let labelFor = '';
	export let disabled = false;
	export let error = '';
	export let horizontal = true;

	let className = '';
	export { className as class };
</script>

<div class="sk-input__group {className}" class:horizontal>
	<div class="sk-input__group__line">
		{#if horizontal}
			<div class="sk-input__group__left">
				<label class="sk-input__group__label" class:error class:disabled for={labelFor}
					>{title}</label
				>
			</div>
		{:else}
			<div class="sk-input__group__top">
				<label class="sk-input__group__label" class:error class:disabled for={labelFor}
					>{title}</label
				>
				<span class="sk-input__group__error">{error}</span>
			</div>
		{/if}
		<slot />
	</div>
	{#if horizontal}
		<div class="sk-input__group__bottom">
			<span class="sk-input__group__error">{error}</span>
		</div>
	{/if}
</div>
