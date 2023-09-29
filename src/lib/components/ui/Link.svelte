<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let label: string
	export let href: string

	const dispatch = createEventDispatcher()
</script>

<a
	on:click={() => dispatch('clicked')}
	{...$$restProps}
	{href}
	aria-label={label}
	class={$$restProps.class || 'animate-underline'}
>
	<slot>{label}</slot>
</a>
