<script lang="ts">
	import { BookOpenText } from "@lucide/svelte";

	let {title, greeting} = $props()

</script>

<div class="flex flex-col">
	<div class="flex items-center justify-center">
		<BookOpenText class="mx-1 size-10 text-accent content-center"/>
		<h1 class="text-3xl font-semibold text-primary">Shelfy</h1>
	</div>
	
	<div class="flex flex-col items-center m-5">
		<h3 class="font-medium text-2xl text-black">{title}</h3>
		<p class="font-light text-muted-foreground">{greeting}</p>
	</div>
</div>