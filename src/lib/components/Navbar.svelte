<script lang="ts">
	import { goto } from '$app/navigation';
	import { BookOpenText } from '@lucide/svelte';
	import { House, Bookmark, ChartNoAxesColumn, LogOut } from '@lucide/svelte';

	import {default as SignOutButton} from "$components/Authentication/SignOutButton.svelte"

	let routes = [
		{ name: 'Dashboard', svg: House, href: '/dashboard' },
		{ name: 'Library', svg: Bookmark, href: '/library' },
		{ name: 'Stats', svg: ChartNoAxesColumn, href: '/statistics' }
	];

	let currentRoute = '/dashboard';

	function handleRouteChange(routeName: string) {
		goto(routeName);
		currentRoute = routeName;
	}
</script>

<nav aria-label="Main Navigation" class="flex w-full bg-white py-5 px-3 xl:px-0 xl:justify-center">
	<div class="flex w-full items-center justify-between xl:w-[80%]">
		<button class="flex items-center justify-center hover:cursor-pointer" onclick={() => {
			goto("/dashboard")
		}}>
			<BookOpenText class="text-primary mr-1.5 size-8 content-center" />
			<h1 class="text-xl font-medium text-black">Shelfy</h1>
		</button>
		<ul role="menu" class="flex space-x-4">
			{#each routes as { name, svg, href }}
				<li role="none" class="link-underline link-underline-black {currentRoute ===
							href
								? 'link-underline-selected'
								: null}">
					<button
						aria-label={currentRoute === href ? 'page' : undefined}
						class="flex hover:cursor-pointer"
						onclick={() => handleRouteChange(href)}
					>
						<svelte:component this={svg} class="mr-2 size-5" />
						<span
							class="{currentRoute ===
							href
								? 'font-semibold'
								: null}"
						>
							{name}
						</span>
					</button>
				</li>
			{/each}
		</ul>
		<div class="flex">
			<h1>Name Placeholder</h1>
			<SignOutButton buttonStyling="border-1 rounded-md p-1 border-gray-500 bg-gray-200"><LogOut /></SignOutButton>
		</div>
	</div>
</nav>

<style>
	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 2px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#000000, #000000)
	}

	.link-underline:hover {
		background-size: 100% 2px;
		background-position: 0 100%
	}

	.link-underline-selected {
		background-size: 100% 2px;
		background-position: 0 100%
	}
</style>