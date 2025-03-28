<script lang="ts">
	import {Search, Plus} from "@lucide/svelte"
</script>

<section class="my-10">
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