<script lang="ts">
	import { enhance } from '$app/forms';

	import { default as Header } from '$components/Authentication/Header.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	let { form } = $props();
	let emailModule = $state(false);

	const submitSignup: SubmitFunction = ({ action, cancel, formData }) => {
		const name = formData.get('name')?.toString() ?? '';

		// Check the length of the actual string before sending the form
		if (name.length > 20) {
			form = { ...form, message: 'Name is too long' };
			cancel();
		}

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					emailModule = true;
					break;
				default:
					break;
			}
			await update();
		};
	};
</script>

{#if !emailModule}
	<div class="card w-150">
		<Header title="Create an account" greeting="Start tracking your reading journey"></Header>
		{#if form?.message}
			<div class="mb-4 text-red-500">{form.message}</div>
		{/if}
		<form
			method="POST"
			action="/signup"
			use:enhance={submitSignup}
			class="flex w-full flex-col items-center"
		>
			<div class="flex w-5/6 flex-col">
				<label for="name" class="font-medium">Name</label>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					class="px-2 py-1 my-2 rounded-md border-2 border-black"
				/>
				<label for="email" class="font-medium">Email</label>
				<input
					type="text"
					name="email"
					placeholder="your.email@email.com"
					class="px-2 py-1 my-2 rounded-md border-2 border-black"
				/>
				<label for="password" class="font-medium">Password</label>
				<input
					type="password"
					name="password"
					placeholder="Your password"
					class="px-2 py-1 my-2 rounded-md border-2 border-black"
				/>
			</div>

			<input type="submit" name="go" value="Submit" class="button-primary mt-10" />
		</form>
	</div>
{:else}
	<div>Works</div>
	<!-- fare component statico e fanculo il redirect -->
{/if}
