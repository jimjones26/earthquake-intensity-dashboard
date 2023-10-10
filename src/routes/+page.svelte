<script lang="ts">
	import type { PageData } from './$types';
	import type { ListItem } from '$lib/ListItem';
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';
	import EarthquakeList from '$lib/components/ui/EarthquakeList.svelte';
	import ChartList from '$lib/components/ui/ChartList.svelte';
	import { earthquakeStore } from '$lib/earthquake-store';
	import { compareStore } from '$lib/compare-store';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import ListLabel from '$lib/components/ui/ListLabel.svelte';

	export let data: PageData;

	earthquakeStore.hydrate(data.earthquakes);
</script>

<div class="flex mt-4 ml-5 mr-5 flex-1 overflow-hidden">
	<div class="flex-1 flex">
		<div class="flex-1 flex flex-col mr-5">
			<div><Input type="text" placeholder="Search here" /></div>
			<ListLabel label="List of earthquakes:" />
			<!-- Lists of earthquakes-->
			<EarthquakeList items={$earthquakeStore.items} type="yellow" />
			<!-- Compare List -->
			{#if $compareStore.items[0]}
				<div in:fade={{ duration: 500, easing: cubicIn }} class="mb-5 mr-4">
					<ListLabel label="Compare:" />
				</div>
			{/if}
		</div>
		<Separator orientation="vertical" class="mr-5 bg-[#21272F]" decorative />
	</div>
	<div class="flex w-[596px] bg-[#303547]/20 border border-[#31373F] mb-5">
		<!-- Chart List -->
		<ChartList items={$compareStore.items} type="yellow" />
	</div>
</div>
