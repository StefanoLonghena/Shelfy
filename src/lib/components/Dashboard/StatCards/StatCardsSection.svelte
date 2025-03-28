<script lang="ts">
	
	import {default as StatCard} from "$components/Dashboard/StatCards/StatCard.svelte"

	const statCategory = [
		{name: "Books Read", svg: Book},
		{name: "Pages Read", svg: Bookmark},
		{name: "Reading Streak", svg: Calendar},
		{name: "Hours Read", svg: Coffee}
	]

	import { Book, Bookmark, Calendar, Coffee } from '@lucide/svelte';
</script>

<section class="flex justify-between xl:mt-20 w-full space-x-6">
	{#each statCategory as {name, svg}}
		<StatCard {name} Svg={svg} />
	{/each}
</section>