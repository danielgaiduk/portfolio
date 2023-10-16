<script lang="ts">
	import { Headline, Text, Wrapper, FlyUp } from '$lib/components'
	import { t } from '$lib/translations'

	const WORK_EXPERIENCE_MAPPING = [
		{
			title: $t('resume.view.title'),
			company: 'View GmbH',
			date: '01/2023 - 09/2023',
			description: $t('resume.view.description'),
			technologies: [
				'HTML5',
				'CSS3',
				'TypeScript',
				'Svelte',
				'SvelteKit',
				'PostCSS',
				'TailwindCSS',
				'Pocketbase',
				'Prisma',
				'Vitest'
			]
		},
		{
			title: $t('resume.micromerce.title'),
			company: 'Micromerce GmbH',
			date: '10/2022 - 06/2023',
			description: $t('resume.micromerce.description'),
			technologies: ['TypeScript', 'Node.js', 'Jest']
		},
		{
			title: $t('resume.pwc.title'),
			company: 'PwC GmbH',
			date: '08/2022 - 10/2022',
			description: $t('resume.pwc.description'),
			technologies: [
				'HTML5',
				'CSS3',
				'TypeScript',
				'React',
				'Next',
				'Redux',
				'Material-UI',
				'GraphQL',
				'Cypress'
			]
		},
		{
			title: $t('resume.telekom.title'),
			company: 'Telekom AG',
			date: '07/2022 - 08/2022',
			description: $t('resume.telekom.description'),
			technologies: [
				'HTML5',
				'CSS3',
				'TypeScript',
				'React',
				'Next',
				'Redux',
				'Material-UI',
				'GraphQL',
				'Cypress'
			]
		},
		{
			title: $t('resume.plentymarkets.title'),
			company: 'Plentysystems AG',
			date: '10/2021 - 08/2022',
			description: $t('resume.plentymarkets.description'),
			technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Twig']
		},
		{
			title: $t('resume.gaiduk.title'),
			company: 'Gühnter-Gaiduk Immobilien',
			date: '08/2021 - 12/2021',
			description: $t('resume.gaiduk.description'),
			technologies: [
				'HTML5',
				'CSS3',
				'TypeScript',
				'React',
				'Next',
				'TailwindCSS',
				'Shadcn/UI',
				'GraphQL'
			]
		},
		{
			title: $t('resume.swym.title'),
			company: 'Swym',
			date: '06/2021 - 08/2021',
			description: $t('resume.swym.description'),
			technologies: [
				'HTML5',
				'CSS3',
				'TypeScript',
				'React',
				'Next',
				'Redux',
				'Ant Design',
				'GraphQL',
				'Cypress'
			]
		},
		{
			title: $t('resume.quirin.title'),
			company: 'Quirin Privatbank AG',
			date: '12/2020 - 06/2021',
			description: $t('resume.quirin.description'),
			technologies: ['HTML5', 'CSS3', 'TypeScript', 'Svelte', 'Routify', 'PostCSS', 'TailwindCSS']
		},
		{
			title: $t('resume.eam.title'),
			company: 'EAM GmbH & Co. KG',
			date: '01/2020 - 01/2021',
			description: $t('resume.eam.description'),
			technologies: ['HTML5', 'CSS3', 'TypeScript', 'Svelte', 'Sapper', 'PostCSS', 'TailwindCSS']
		},
		{
			title: $t('resume.insignio.title'),
			company: 'Insignio CRM GmbH',
			date: '08/2018 - 06/2021',
			description: $t('resume.insignio.description'),
			technologies: [
				'HTML5',
				'CSS3',
				'JavaScript',
				'PHP',
				'Sugar CRM',
				'Wordpress',
				'Typo3',
				'Svelte',
				'Routify',
				'Sapper'
			]
		}
	]
</script>

<Wrapper id="resume">
	<Headline type="h2">{$t('resume.headline')}</Headline>
	{#each WORK_EXPERIENCE_MAPPING as { title, company, date, description, technologies }, i}
		<div>
			<Text class="font-bold uppercase text-white">{title}</Text>
			<Text>{company} | {date}</Text>
			<Text class="py-4">{description}</Text>
			{#if technologies?.length}
				<Text class="font-bold">
					{$t('resume.used_technologies')}:
				</Text>
				<div class="flex flex-wrap gap-2 mt-4">
					{#each technologies as technologie}
						<Text
							class="font-semibold text-white"
							wrapperClass="h-10 w-40 border border-primary-normal/50 rounded-l-lg rounded-r-lg flex items-center justify-center"
						>
							{technologie}
						</Text>
					{/each}
				</div>
			{/if}
		</div>
		{#if i + 1 !== WORK_EXPERIENCE_MAPPING?.length}
			<FlyUp>
				<div class="border-b border-primary-normal/50" />
			</FlyUp>
		{/if}
	{/each}
</Wrapper>
