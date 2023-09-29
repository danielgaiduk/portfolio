<script lang="ts">
	import '../../../app.css'
	import { getAllLocalizedPaths } from '$lib/utils'
	import { Navbar, Footer } from '$lib/components'
	import { page } from '$app/stores'
	import { removeOverflowHidden } from '$lib/stores'
	import { t } from '$lib/translations'

	let removeOverflow = false

	$: canonical = $page?.url?.origin
	$: description = $t($page?.data?.description)
	$: paths = getAllLocalizedPaths($page?.url)
	$: title = $t($page?.data?.title)

	function removeOverFlow(event: AnimationEvent) {
		if (event.animationName !== 'fly-up') return
		$removeOverflowHidden = true
	}
</script>

<svelte:window on:animationend={removeOverFlow} />

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#each paths as { href, hreflang }}
		<link rel="alternate" {hreflang} {href} />
	{/each}
</svelte:head>

<Navbar />

<main class="space-y-24 max-w-7xl mx-auto p-4 my-12">
	<slot />
</main>

<Footer />
