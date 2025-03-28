<script lang="ts">
	import { default as WelcomeSection } from '$components/Dashboard/WelcomeSection.svelte';
	import { default as StatCardsSection } from '$components/Dashboard/StatCards/StatCardsSection.svelte';
	import {default as CurrentlyReadingSection } from "$components/Dashboard/CurrentlyReading/CurrentlyReadingSection.svelte"

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log(data.data);
</script>

<div class="w-full">
	
	<WelcomeSection />
	<StatCardsSection />
	<CurrentlyReadingSection />
</div>
