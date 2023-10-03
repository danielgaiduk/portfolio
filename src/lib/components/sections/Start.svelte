<script lang="ts">
	import { Headline, Text, Wrapper, FlyUp } from '$lib/components'
	import { t } from '$lib/translations'
</script>

<Wrapper id="start">
	<div>
		<Headline class="!text-primary-highlight text-center ">
			{$t('start.title.1')}
		</Headline>
		<Headline type="h2" class="h1 text-center">
			{$t('start.title.2')}
		</Headline>
	</div>
	<Text class="max-w-2xl mx-auto text-center">
		<!-- eslint-disable-next-line -->
		{@html $t('start.quote')}
	</Text>
	<FlyUp class="flex items-center justify-center">
		<img src="/images/background.webp" alt={$t('start.image')} />
	</FlyUp>
</Wrapper>
