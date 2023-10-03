<script lang="ts">
	import '../../../app.css'
	import { getAllLocalizedPaths } from '$lib/utils'
	import { Navbar, Footer } from '$lib/components'
	import { page } from '$app/stores'
	import { t } from '$lib/translations'

	$: description = $t($page?.data?.description)
	$: paths = getAllLocalizedPaths($page?.url)
	$: title = $t($page?.data?.title)
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#each paths as { href, hreflang }}
		<link rel="alternate" {hreflang} {href} />
	{/each}
</svelte:head>

<Navbar />

<main class="space-y-24 max-w-7xl w-full mx-auto p-4 my-12">
	<slot />
</main>

<Footer />
