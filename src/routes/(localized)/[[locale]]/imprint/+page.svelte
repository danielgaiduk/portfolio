<script>
	import { t } from '$lib/translations'
</script>

<div class="imprint bg-white text-black p-4 space-y-6">
	<!-- eslint-disable-next-line -->
	{@html $t('imprint.text')}
</div>

<style global>
	.imprint :global(h1) {
		@apply text-4xl font-bold;
	}

	.imprint :global(h3) {
		@apply text-2xl font-bold;
	}
</style>
