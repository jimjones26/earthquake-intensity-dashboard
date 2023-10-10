<script lang="ts">
	import type { PageData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';
	import EarthquakeList from '$lib/components/ui/EarthquakeList.svelte';
	import ChartList from '$lib/components/ui/ChartList.svelte';

	export let data: PageData;

	interface ListItem {
		id: number;
		intensity: number;
		time: string;
		location: string;
		coordinates: string;
		distanced: string;
		depth: string;
		order: number;
	}

	let items: ListItem[] = data.earthquakes;
	let comparedItems: ListItem[] = [];
</script>

<div class="flex mt-4 ml-5 mr-5 flex-1 overflow-hidden">
	<div class="flex-1 flex">
		<div class="flex-1 flex flex-col mr-5">
			<div><Input type="text" placeholder="Search here" /></div>
			<div class="flex items-center mt-3">
				<div class="text-sm text-[#60656D]">List of earthquakes:</div>
				<Separator class="flex-1 ml-2 bg-[#21272F]" decorative />
			</div>
			<!-- Lists of earthquakes-->
			<EarthquakeList {items} type="yellow" />
			<div class="mb-5 mr-4 hidden bg-slate-100">compare list</div>
		</div>
		<Separator orientation="vertical" class="mr-5 bg-[#21272F]" decorative />
	</div>
	<div class="flex w-[596px] bg-[#303547]/20 border border-[#31373F] mb-5">
		<!-- Chart List -->
		<ChartList items={comparedItems} type="yellow" />
	</div>
</div>
