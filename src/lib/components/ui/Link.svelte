<script lang="ts">
	export let label: string
	export let href: string
</script>

<a
	on:click
	{...$$restProps}
	{href}
	aria-label={label}
	class={$$restProps.class || 'animate-underline'}
>
	<slot>{label}</slot>
</a>
