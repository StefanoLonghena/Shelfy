<script lang="ts">
	import { default as WelcomeSection } from '$components/Dashboard/WelcomeSection.svelte';
	import { default as StatCardsSection } from '$components/Dashboard/StatCards/StatCardsSection.svelte';
	import {default as CurrentlyReadingSection } from "$components/Dashboard/CurrentlyReading/CurrentlyReadingSection.svelte"

	import type { PageProps } from './$types';

	//saving supabase query results inside data object
	let { data }: PageProps = $props();

	let booksRead = data.books.length
	let pagesRead = 3
	let activeStreak = 1
	let hoursRead = 5

</script>

<div class="w-full">
	
	<WelcomeSection />
	<StatCardsSection {booksRead}  {pagesRead} {activeStreak} {hoursRead}/>
	<CurrentlyReadingSection data={data.books}/>

</div>
