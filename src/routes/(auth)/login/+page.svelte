<script lang="ts">
	import { Header } from '$components';
</script>

<div class="card w-150">
	<Header title="Welcome Back" greeting="Sign in to your account"></Header>
	<form action="POST" class="flex w-full flex-col items-center">
		<div class="flex w-5/6 flex-col">
			<label for="fname" class="font-medium">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				placeholder="your.email@email.com"
				class="rounded-md border-2 border-black my-2"
			/>
			<label for="pass" class="font-medium">Password</label>
			<input
				type="text"
				name="password"
				id="pass"
				placeholder="your.email@email.com"
				class="rounded-md border-2 border-black my-2"
			/>
		</div>

		<input type="submit" name="go" value="Submit" class="button-primary mt-10"/>
	</form>
</div>
