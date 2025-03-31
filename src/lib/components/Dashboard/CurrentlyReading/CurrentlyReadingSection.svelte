<script>
	let {data} = $props()
</script>

<div class="mt-10">
<h1 class="font-sans font-semibold text-2xl text-primary">Currently Reading</h1>
{#each data as book}
	<p>{book.isbn}</p>
{/each}
</div>