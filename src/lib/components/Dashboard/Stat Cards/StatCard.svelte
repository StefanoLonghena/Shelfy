<script lang="ts">
	let {name, Svg} = $props()
</script>

<div class="rounded-2xl bg-white p-2 w-full">
		<div class="flex justify-between">
			<h1 class="font-sans">{name}</h1>
			<Svg />
		</div>
</div>