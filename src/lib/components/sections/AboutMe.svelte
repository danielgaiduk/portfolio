<script>
	import { Headline, Text, Wrapper } from '$lib/components'
	import { page } from '$app/stores'
	import { t } from '$lib/translations'

	const TEXT_MAPPING = [
		$t('aboutme.text.1'),
		$t('aboutme.text.2'),
		$t('aboutme.text.3'),
		$t('aboutme.text.4')
	]
</script>

<Wrapper id="aboutme">
	<Headline type="h2">
		<!-- eslint-disable-next-line -->
		{@html $t('aboutme.headline')}
	</Headline>
	<div class="space-y-6">
		{#each TEXT_MAPPING as value}
			<Text class="font-semibold">
				<!-- eslint-disable-next-line -->
				{@html value}
			</Text>
		{/each}
	</div>
	<div
		class="max-w-4xl mx-auto flex flex-col sm:flex-row flex-wrap sm:items-center justify-center gap-2"
	>
		{#each $page?.data?.characteristics as value}
			<Text
				wrapperClass="border border-primary-normal/50 rounded-l-full rounded-r-full py-4 px-6"
				class="h7 font-shapiro text-white uppercase -mb-1 text-center"
			>
				<!-- eslint-disable-next-line -->
				{@html value}
			</Text>
		{/each}
	</div>
</Wrapper>
