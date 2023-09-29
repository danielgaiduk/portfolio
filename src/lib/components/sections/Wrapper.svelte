<script lang="ts">
	import { t } from '$lib/translations'

	export let id: string
</script>

<section aria-label={$t(`${id}.headline`)} class="space-y-12 w-full" {id}>
	<slot />
</section>
