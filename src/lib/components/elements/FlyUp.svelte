<script>
	import { removeOverflowHidden } from '$lib/stores'

	export let isHeadline = false

	$: animation = isHeadline ? 'animate-fly-up-headline' : 'animate-fly-up'
</script>

<div class:overflow-hidden={!$removeOverflowHidden}>
	<div class="{animation} {$$restProps.class || ''}">
		<slot />
	</div>
</div>
