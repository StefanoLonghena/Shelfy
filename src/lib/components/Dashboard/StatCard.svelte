<script lang="ts">
	let {name, Svg} = $props()
</script>

<div class="rounded-2xl bg-white w-[70%]">
	<div class="flex">
		<h1>{name}</h1>
		<Svg />
	</div>
</div>