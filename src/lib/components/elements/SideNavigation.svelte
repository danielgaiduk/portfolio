<script>
	import { createEventDispatcher, onMount } from 'svelte'
	import { Link, Delimiter, GithubIcon, XingIcon, CloseIcon } from '$lib/components'
	import { slide, fade } from 'svelte/transition'
	import { page } from '$app/stores'
	import { t } from '$lib/translations'

	const dispatch = createEventDispatcher()

	const LINK_MAPPING = [
		{ href: '', label: $t('start.headline') },
		{ href: 'aboutme', label: $t('aboutme.headline') },
		{ href: 'techstack', label: $t('techstack.headline') },
		{ href: 'resume', label: $t('resume.headline') }
	]

	const ADDITIONAL_LINKS = [
		{
			label: $t('footer.imprint'),
			href: `imprint`
		},
		{
			label: $t('footer.privacy'),
			href: `privacy`
		}
	]

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

	function closeSidebar() {
		dispatch('close')
	}

	onMount(() => {
		document.body.classList.toggle('overflow-hidden')

		return () => {
			document.body.classList.toggle('overflow-hidden')
		}
	})
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class="fixed inset-0 w-full h-full z-50 bg-primary-darker/80" on:click|self={closeSidebar}>
	<div
		class="absolute right-0 w-96 h-full flex flex-col items-center justify-center bg-primary-dark p-4 overflow-y-auto"
		in:slide={{ duration: 500, axis: 'x' }}
		out:slide={{ delay: 500, duration: 500, axis: 'x' }}
	>
		<div
			class="h-full w-full flex flex-col items-center justify-center"
			in:fade={{ delay: 500, duration: 500 }}
			out:fade={{ duration: 500 }}
		>
			<div class="absolute top-0 right-0 p-4">
				<button
					on:click={closeSidebar}
					class="w-6 sm:w-8 lg:w-10 fill-white animate-fill-color-switch"
				>
					<CloseIcon />
				</button>
			</div>

			<div class="mt-auto flex flex-col items-center justify-center gap-6">
				{#each LINK_MAPPING as { href, label }}
					<Link
						{label}
						class="animate-underline text-2xl"
						href={`/${$page?.data?.locale}${href ? `/#${href}` : ''}`}
						on:click={closeSidebar}
					/>
				{/each}
				<div class="flex items-center justify-center gap-6">
					{#each SOCALMEDIA_MAPPING as { label, icon, href }}
						<Link {href} {label} class="no-animation" rel="nofollow" target="_blank">
							<svelte:component this={icon} class="w-10 h-10 animate-fill-color-switch" />
						</Link>
					{/each}
				</div>
			</div>

			<div class="mt-auto p-4">
				{#each ADDITIONAL_LINKS as { href, label }, i}
					<Link on:click={closeSidebar} {href} {label} />
					{#if i !== ADDITIONAL_LINKS.length - 1}
						<Delimiter />
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
