<script>
	import { t } from '$lib/translations'
</script>

<div class="privacy bg-white text-black p-4 space-y-6">
	{@html $t('privacy.text')}
</div>

<style global>
	.privacy :global(h1) {
		@apply text-4xl font-bold;
	}

	.privacy :global(h2) {
		@apply text-2xl font-bold;
	}
</style>
