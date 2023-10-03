<script lang="ts">
	import {
		BootstrapIcon,
		Css3Icon,
		ExpressIcon,
		FirebaseIcon,
		FlyUp,
		GraphQLIcon,
		Headline,
		Html5Icon,
		JavaScriptIcon,
		JestIcon,
		MaterialUiIcon,
		MongoDBIcon,
		MySQLIcon,
		NextIcon,
		NuxtIcon,
		NodejsIcon,
		PhpIcon,
		PostgreSQLIcon,
		ReactIcon,
		RedisIcon,
		ReduxIcon,
		SassIcon,
		SvelteIcon,
		TailwindIcon,
		Text,
		TypeScriptIcon,
		VueIcon,
		Wrapper
	} from '$lib/components'
	import { t } from '$lib/translations'
	// eslint-disable-next-line
	// @ts-ignore
	import { tooltip } from '@svelte-plugins/tooltips'

	const LANGUAGE_MAPPING = [
		{ Icon: Html5Icon, label: 'HTML5' },
		{ Icon: Css3Icon, label: 'CSS3' },
		{ Icon: JavaScriptIcon, label: 'JavaScript' },
		{ Icon: TypeScriptIcon, label: 'TypeScript' },
		{ Icon: NodejsIcon, label: 'NodeJs' },
		{ Icon: PhpIcon, label: 'PHP' }
	]

	const JAVASCRIPT_FRAMEWORK_MAPPING = [
		{ Icon: SvelteIcon, label: 'Svelte' },
		{ Icon: ReactIcon, label: 'React' },
		{ Icon: NextIcon, label: 'Next' },
		{ Icon: ReduxIcon, label: 'Redux' },
		{ Icon: VueIcon, label: 'Vue' },
		{ Icon: NuxtIcon, label: 'Nuxt' },
		{ Icon: RedisIcon, label: 'Redis' },
		{ Icon: ExpressIcon, label: 'Express' },
		{ Icon: JestIcon, label: 'Jest' }
	]

	const CSS_FRAMEWORK_MAPPING = [
		{ Icon: SassIcon, label: 'Sass' },
		{ Icon: TailwindIcon, label: 'TailwindCSS' },
		{ Icon: MaterialUiIcon, label: 'MaterialUi' },
		{ Icon: BootstrapIcon, label: 'Bootstrap' }
	]

	const DATABASE_TECHNOLOGIES = [
		{ Icon: GraphQLIcon, label: 'GraphQL' },
		{ Icon: MySQLIcon, label: 'MySQL' },
		{ Icon: PostgreSQLIcon, label: 'PostgreSQL' },
		{ Icon: MongoDBIcon, label: 'MongoDB' },
		{ Icon: FirebaseIcon, label: 'Firebase' }
	]

	const TECHSTACK_MAPPING = [
		{ label: $t('techstack.languages'), values: LANGUAGE_MAPPING },
		{ label: $t('techstack.frameworks'), values: JAVASCRIPT_FRAMEWORK_MAPPING },
		{ label: $t('techstack.css_frameworks'), values: CSS_FRAMEWORK_MAPPING },
		{ label: $t('techstack.database_technologies'), values: DATABASE_TECHNOLOGIES }
	]
</script>

<Wrapper id="techstack">
	<Headline type="h2">{$t('techstack.headline')}</Headline>
	<div class="space-y-6">
		{#each TECHSTACK_MAPPING as { label, values }}
			<div class="space-y-3">
				<Text class="font-bold uppercase">{label}</Text>
				<FlyUp removeOverflowHidden class="flex flex-wrap items-center gap-4">
					{#each values as { label, Icon }}
						<div use:tooltip={{ content: label, autoPosition: true }}>
							<Icon class="h-16" />
						</div>
					{/each}
				</FlyUp>
			</div>
		{/each}
		<Text type="p" class="text-sm">{$t('techstack.info')}</Text>
	</div>
</Wrapper>
