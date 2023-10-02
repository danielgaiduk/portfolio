<script lang="ts">
	import { EMAIL, PHONE_NUMBER } from '$lib/constants'
	import { HamburgerIcon, Link, Delimiter, SideNavigation, LogoIcon } from '$lib/components'
	import { t } from '$lib/translations'
	import { toValidPhoneNumber } from '$lib/utils'

	const LINK_MAPPING = [
		{ href: `tel:${toValidPhoneNumber(PHONE_NUMBER)}`, label: PHONE_NUMBER },
		{ href: `mailto:${EMAIL}`, label: EMAIL }
	]

	let showNavigation = false
</script>

<nav
	class="sticky top-0 z-40 bg-primary-darker flex items-center justify-between p-4 border-b border-primary-normal/50"
>
	<Link class="no-animation" href="/" label={$t('navbar.logo_link_label')}>
		<LogoIcon class="w-16 sm:w-20 lg:w-24" />
	</Link>
	<div class="hidden md:block w-auto">
		{#each LINK_MAPPING as { href, label }, i}
			<Link {href} {label} />
			{#if i !== LINK_MAPPING.length - 1}
				<Delimiter />
			{/if}
		{/each}
	</div>
	<button
		aria-label="Hamburger"
		on:click={() => (showNavigation = true)}
		class="w-10 sm:w-12 lg:w-14 -mr-1.5 fill-none stroke-white animate-stroke-color-switch cursor-pointer overflow-hidden"
	>
		<HamburgerIcon />
	</button>
</nav>

{#if showNavigation}
	<SideNavigation on:close={() => (showNavigation = false)} />
{/if}
