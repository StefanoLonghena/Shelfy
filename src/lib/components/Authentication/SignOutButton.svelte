<script lang="ts">
	let {children, buttonStyling} = $props()
</script>

<form method="POST" action='/signout'>
	<button class={buttonStyling} type="submit">{@render children()}</button>
</form>