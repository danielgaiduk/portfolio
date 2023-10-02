<script lang="ts">
	import { Headline, Text, Wrapper, FlyUp, Picture } from '$lib/components'
	import { t } from '$lib/translations'
	// @ts-ignore
	import background from '$lib/images/background.webp?w=500;900;1200&format=avif;webp;jpg&as=picture'
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
		{@html $t('start.quote')}
	</Text>
	<FlyUp class="flex items-center justify-center">
		<Picture loading="eager" meta={background} alt={$t('start.image')} />
	</FlyUp>
</Wrapper>
