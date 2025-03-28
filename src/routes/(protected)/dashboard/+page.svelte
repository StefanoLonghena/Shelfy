<script lang="ts">
	import { default as WelcomeSection } from '$components/Dashboard/WelcomeSection.svelte';
	import { default as StatCardsSection } from '$components/Dashboard/StatCards/StatCardsSection.svelte';
	import {default as CurrentlyReadingSection } from "$components/Dashboard/CurrentlyReading/CurrentlyReadingSection.svelte"

	const libri = [
		{
			titolo: 'Il Signore degli Anelli',
			pagine: 1178,
			pagineLette: 450
		},
		{
			titolo: 'Harry Potter e la Pietra Filosofale',
			pagine: 303,
			pagineLette: 303
		},
		{
			titolo: '1984',
			pagine: 328,
			pagineLette: 150
		},
		{
			titolo: 'Il Piccolo Principe',
			pagine: 96,
			pagineLette: 96
		},
		{
			titolo: 'Cronache del ghiaccio e del fuoco',
			pagine: 807,
			pagineLette: 0
		}
	];

	console.log(libri);
</script>

<div class="w-full">
	
	<WelcomeSection />
	<StatCardsSection />
	<CurrentlyReadingSection />
</div>
