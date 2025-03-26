<script lang="ts">
	import { default as Header } from '$components/Authentication/Header.svelte';
	export let form: { message?: string } | undefined;
</script>

<div class="card w-150">
	<Header title="Create an account" greeting="Start tracking your reading journey"></Header>
	{#if form?.message}
		<div class="mb-4 text-red-500">{form.message}</div>
	{/if}
	<form method="POST" action="/signup" class="flex w-full flex-col items-center">
		<div class="flex w-5/6 flex-col">
			<label for="name" class="font-medium">Email</label>
			<input
				type="text"
				name="name"
				placeholder="Your Name"
				class="my-2 rounded-md border-2 border-black"
			/>
			<label for="email" class="font-medium">Email</label>
			<input
				type="text"
				name="email"
				placeholder="your.email@email.com"
				class="my-2 rounded-md border-2 border-black"
			/>
			<label for="password" class="font-medium">Password</label>
			<input
				type="password"
				name="password"
				placeholder="Your password"
				class="my-2 rounded-md border-2 border-black"
			/>
		</div>

		<input type="submit" name="go" value="Submit" class="button-primary mt-10" />
	</form>
</div>
