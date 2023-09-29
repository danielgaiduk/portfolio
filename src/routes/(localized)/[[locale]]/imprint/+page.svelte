<script>
	import { t } from '$lib/translations'
</script>

<div class="imprint bg-white text-black p-4 space-y-6">
	{@html $t('imprint.text')}
</div>

<style global>
	.imprint :global(h1) {
		@apply h4 font-bold;
	}
	.imprint :global(h3) {
		@apply h7 font-bold;
	}
</style>
