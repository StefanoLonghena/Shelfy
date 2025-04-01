<script lang="ts">
	
	import {default as StatCard} from "$components/Dashboard/StatCards/StatCard.svelte"

	let { booksRead, pagesRead, activeStreak, hoursRead } = $props()

	const statCategory = [
		{name: "Books Read", svg: Book, value: booksRead},
		{name: "Pages Read", svg: Bookmark, value: pagesRead},
		{name: "Reading Streak", svg: Calendar, value: activeStreak},
		{name: "Hours Read", svg: Coffee, value: hoursRead}
	]

	import { Book, Bookmark, Calendar, Coffee } from '@lucide/svelte';
</script>

<section class="flex justify-between xl:mt-20 w-full space-x-6">
	{#each statCategory as {name, svg, value}}
		<StatCard {name} Svg={svg} stat={value}/>
	{/each}
</section>