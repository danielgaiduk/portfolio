<script lang="ts">
	import { FlyUp } from '$lib/components'
	export let type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1'
</script>

<FlyUp isHeadline>
	<svelte:element
		this={type}
		{...$$restProps}
		class="font-shapiro text-white uppercase leading-[.9] {$$restProps?.class || ''}"
	>
		<slot />
	</svelte:element>
</FlyUp>
