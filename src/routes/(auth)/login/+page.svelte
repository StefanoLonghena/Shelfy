<script lang="ts">
	import { Header } from "$components"
</script>

<div class="card w-150">
	<Header title="Welcome Back" greeting="Sign in to your account"></Header>
	<form action="POST" class="flex flex-col w-full items-center">
		<div class="flex flex-col w-2/3">
			<label for="fname" class="font-medium">Email</label>
			<input type="text" name="email" id="email" class="border-2 border-black rounded-md">
		</div>
	</form>
</div>