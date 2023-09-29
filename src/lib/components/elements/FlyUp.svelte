<script>
	import { removeOverflowHidden } from '$lib/stores'

	export let isHeadline = false
</script>

<div class:overflow-hidden={!$removeOverflowHidden}>
	<div
		class="{isHeadline ? 'animate-fly-up-headline' : 'animate-fly-up'} {$$restProps.class || ''}"
	>
		<slot />
	</div>
</div>
