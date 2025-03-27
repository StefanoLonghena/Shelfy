<script lang="ts">
	import { default as Header } from '$components/Authentication/Header.svelte';
	export let form: { message?: string, email?: string } | undefined;
</script>

<div class="card w-150">
	<Header title="Welcome Back" greeting="Sign in to your account"></Header>
	{#if form?.message}
		<div class="mb-4 text-red-500">{form.message}</div>
	{/if}
	<form method="POST" action="/login" class="flex w-full flex-col items-center">
		<div class="flex w-5/6 flex-col">
			<label for="fname" class="font-medium">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				value={form?.email}
				placeholder="your.email@email.com"
				class="px-2 py-1 my-2 rounded-md border-2 border-black"
			/>
			<label for="pass" class="font-medium">Password</label>
			<input
				type="password"
				name="password"
				id="pass"
				placeholder="Your password"
				class="px-2 py-1 my-2 rounded-md border-2 border-black"
			/>
		</div>

		<input type="submit" name="go" value="Submit" class="button-primary mt-10" />
	</form>
</div>
