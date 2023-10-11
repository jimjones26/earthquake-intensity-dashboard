<script lang="ts">
	import type { PageData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';
	import EarthquakeList from '$lib/components/ui/EarthquakeList.svelte';
	import ChartList from '$lib/components/ui/ChartList.svelte';
	import { earthquakeStore } from '$lib/earthquake-store';
	import { compareStore } from '$lib/compare-store';
	import { slide } from 'svelte/transition';
	import ListLabel from '$lib/components/ui/ListLabel.svelte';
	import EarthquakeItem from '$lib/components/ui/EarthquakeItem.svelte';
	import { Trash2Icon } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';

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
				<div transition:slide class="mb-5">
					<ListLabel label="Compare:" />
					{#each $compareStore.items as item}
						<div class="flex mb-2 -mr-3 mt-2 items-center last:mb-0" transition:slide>
							<div class="flex-1 flex bg-[#4B4F5C]/25 h-12">
								<EarthquakeItem {item} />
							</div>
							<div>
								<Button
									variant="ghost"
									class="justify-center p-2 ml-1 hover:bg-transparent text-[#4B4F55] hover:text-[#DADDE3]"
									on:click={compareStore.removeItem(item)}
									><Trash2Icon class="w-4 h-4 m-0" /></Button
								>
							</div>
						</div>
					{/each}
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
