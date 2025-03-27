<script lang="ts">
	import { default as StatCard } from '$components/Dashboard/StatCard.svelte';
	import { Search, Plus, Book, Bookmark, Calendar, Coffee } from '@lucide/svelte';

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

	const statCategory = [
		{name: "Books Read", svg: Book},
		{name: "Pages Read", svg: Bookmark},
		{name: "Reading Streak", svg: Calendar},
		{name: "Hours Read", svg: Coffee}
	]

	console.log(libri);
</script>

<div class="w-full">
	<section class="my-5">
		<h1 class="text-primary font-sans text-4xl font-semibold">Welcome Back!</h1>
		<p class="mt-2 font-light text-gray-500">Here is an overview of your reading journey</p>

		<div class="mt-10 flex items-center justify-between">
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
					<Search class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
				</div>
				<input
					type="search"
					class="border-primary active:border-secondary block w-75 rounded-2xl border-2 p-1 ps-10 text-sm xl:w-100"
					placeholder="Search for books"
				/>
			</div>
			<button class="button-primary flex !px-3 !py-1.5">
				<Plus />
				<p class="font-medium">Add book</p>
			</button>
		</div>
	</section>

	<section class="flex justify-between xl:mt-20">
		{#each statCategory as {name, svg}}
			<StatCard {name} Svg={svg} />
		{/each}
	</section>
</div>
<!-- Temporary Button to be moved in settings 
<SignOutButton>Prova</SignOutButton>
-->
