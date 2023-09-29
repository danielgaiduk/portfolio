<script lang="ts">
	import { Headline, Text, Wrapper, FlyUp } from '$lib/components'
	import background from '$lib/images/background.webp'
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
		{@html $t('start.quote')}
	</Text>
	<FlyUp>
		<img width="100%" height="100%" alt={$t('start.image')} src={background} />
	</FlyUp>
</Wrapper>
