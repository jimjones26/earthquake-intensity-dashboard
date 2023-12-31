<script lang="ts">
	import '../app.postcss';
	import type { LayoutData } from './$types';
	import * as d3 from 'd3';

	import DataSummary from '$lib/components/ui/DataSummary.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Separator } from '$lib/components/ui/separator';
	import { Menu } from 'lucide-svelte';
	import { Activity } from 'lucide-svelte';
	import { BarChart } from 'lucide-svelte';
	import { List } from 'lucide-svelte';
	import { Columns } from 'lucide-svelte';
	import { LayoutDashboard } from 'lucide-svelte';
	import { Box } from 'lucide-svelte';
	import { earthquakesDataStore } from '$lib/stores/earthquake-data';
	import { getContext, setContext } from 'svelte';

	export let data: LayoutData;

	$: earthquakesDataStore.set({
		lastUpdated: data.rawEarthquakeData.metadata.generated,
		count: data.rawEarthquakeData.metadata.count,
		earthquakes: data.rawEarthquakeData.features
	});

	console.log(data.rawEarthquakeData.features);

	setContext('earthquakeStoreData', earthquakesDataStore);
	getContext('earthquakeStoreData');

	$: dataSummary = [
		{
			label: 'Number of Earthquakes',
			value: $earthquakesDataStore.count
		},
		{
			label: 'Average Frequency',
			value: 4
		},
		{
			label: 'Maximum Magnitude',
			value: d3.max($earthquakesDataStore.earthquakes.map((d: any) => d.properties.mag))
		},
		{
			label: 'Minimum Magnitude',
			value: d3.min($earthquakesDataStore.earthquakes.map((d: any) => d.properties.mag))
		}
	];
</script>

<div class="relative w-full h-full overflow-hidden">
	<!-- bg tile -->
	<div class="w-screen h-screen overflow-hidden">
		<svg width="100%" height="100%">
			<defs>
				<pattern id="polka-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
					<circle fill="#171E29" cx="15" cy="15" r="2" />
				</pattern>
			</defs>

			<rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
		</svg>
	</div>

	<!-- content -->
	<div class="absolute top-0 right-0 bottom-0 left-0 overflow-hidden flex flex-col">
		<!-- header -->
		<header class="flex bg-[#0C1115] p-5 items-center">
			<Button variant="outline" size="icon" class="w-9 h-9"><Menu class="h-5 w-5" /></Button>
			<div class="flex items-center">
				<Box class="ml-7 mr-3 h-9 w-9" />
				<h4 class="text-base font-bold">Tectonic plates</h4>
			</div>
			<div class="flex flex-1 justify-center">
				<div class="bg-[#1F232F] text-[#62656F] rounded">
					<Toggle size="sm"><LayoutDashboard class="w-[18px] h-[14px] mr-1" />Overview</Toggle>
					<Toggle size="sm"><Activity class="w-[18px] h-[14px] mr-1" />Real Time Activity</Toggle>
					<Toggle size="sm"><BarChart class="w-[18px] h-[14px] mr-1" />Prediction</Toggle>
					<Toggle size="sm"><List class="w-[18px] h-[14px] mr-1" />History</Toggle>
					<Toggle size="sm" pressed><Columns class="w-[18px] h-[14px] mr-1" />Comparison</Toggle>
				</div>
			</div>
			<DataSummary summaryData={dataSummary} />
		</header>
		<Separator class="bg-[#20252C]" />
		<!-- slot -->
		<slot />
	</div>
</div>
