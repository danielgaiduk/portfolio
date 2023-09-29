<script lang="ts">
	import { FlyUp } from '$lib/components'
	export let type: 'p' | 'span' = 'p'
</script>

<FlyUp class={$$restProps?.wrapperClass || ''}>
	<svelte:element this={type} {...$$restProps} class={$$restProps?.class || ''}>
		<slot />
	</svelte:element>
</FlyUp>
