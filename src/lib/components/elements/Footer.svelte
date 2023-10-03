<script>
	import { AUTHOR_NAME } from '$lib/constants'
	import { GithubIcon, XingIcon, Link } from '$lib/components'
	import { t } from '$lib/translations'

	const SOCALMEDIA_MAPPING = [
		{
			label: 'Github',
			icon: GithubIcon,
			href: 'https://github.com/danielgaiduk'
		},
		{
			label: 'Xing',
			icon: XingIcon,
			href: 'https://www.xing.com/profile/Daniel_Gaiduk2'
		}
	]

	const LINK_MAPPING = [
		{
			label: $t('footer.imprint'),
			href: `imprint`
		},
		{
			label: $t('footer.privacy'),
			href: `privacy`
		}
	]
</script>

<footer
	class="w-full flex items-center justify-between p-4 border-t mt-auto border-primary-normal/50"
>
	<div class="flex items-center justify-between w-full gap-4 md:justify-center md:w-auto">
		<span>© {AUTHOR_NAME} {new Date().getFullYear()}</span>
		<div class="flex justify-center items-center gap-4">
			{#each LINK_MAPPING as { label, href }}
				<Link {href} {label} />
			{/each}
		</div>
	</div>
	<div class="hidden md:flex items-center justify-center gap-4">
		{#each SOCALMEDIA_MAPPING as { label, icon, href }}
			<Link {href} {label} class="no-animation" rel="nofollow" target="_blank">
				<svelte:component this={icon} class="w-10 h-10 animate-fill-color-switch" />
			</Link>
		{/each}
	</div>
</footer>
