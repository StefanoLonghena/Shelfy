<script lang="ts">
	let {name, Svg} = $props()
</script>

<div class="rounded-2xl bg-white p-2 w-full">
	<div class="pl-3">
		<h1 class="font-sans text-secondary">{name}</h1>
		<div class="flex justify-start items-center mt-5">
				<Svg class="size-7"/>
				<h1 class="font-semibold text-2xl ml-4">1234</h1>
			</div>
	</div>
</div>