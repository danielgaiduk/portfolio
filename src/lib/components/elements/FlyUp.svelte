<script>
	export let isHeadline = false
	export let removeOverflowHidden = false

	let hasOverflowHidden = true

	if (removeOverflowHidden) {
		setTimeout(() => (hasOverflowHidden = false), 1000)
	}
</script>

<div class:overflow-hidden={hasOverflowHidden}>
	<div
		class="{isHeadline ? 'animate-fly-up-headline' : 'animate-fly-up'} {$$restProps.class || ''}"
	>
		<slot />
	</div>
</div>
