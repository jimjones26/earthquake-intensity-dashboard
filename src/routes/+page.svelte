<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';
	import { Toggle } from '$lib/components/ui/toggle';
	import { ChevronDown } from 'lucide-svelte';
	import Intensity from '$lib/components/ui/Intensity.svelte';
	import ItemRowData from '$lib/components/ui/ItemRowData.svelte';

	let earthquakes = [
		{
			id: 1,
			intensity: 7.2,
			time: '24h 11m',
			location: 'Syracuse, Connecticut',
			coordinates: '-7.67733, 19.16687',
			distanced: '14.94 mi',
			depth: '1.94 mi'
		},
		{
			id: 2,
			intensity: 3.6,
			time: '22h 01m',
			location: '34th St W, Bradenton, USA',
			coordinates: '28.96065, -123.11716',
			distanced: '147 mi',
			depth: '62 mi'
		},
		{
			id: 3,
			intensity: 1.6,
			time: '11h 34m',
			location: 'H.G. Suite 113, Wardville',
			coordinates: '28.96065, -123.11716',
			distanced: '12.8 mi',
			depth: '1.22 mi'
		}
	];
</script>

<div class="flex mt-4 ml-5 mr-5 flex-1">
	<div class="flex-1 flex">
		<div class="flex-1 flex flex-col mr-5">
			<div><Input type="text" placeholder="Search here" /></div>
			<div class="flex items-center mt-3">
				<div class="text-sm text-[#60656D]">List of earthquakes:</div>
				<Separator class="flex-1 ml-2 bg-[#21272F]" decorative />
			</div>
			<!-- Lists of earthquakes-->
			<div class="flex-1 overflow-scroll mt-2">
				<section class="flex flex-col">
					{#each earthquakes as item}
						<div class="mb-2 p-0 bg-[#4B4F5C]/25 h-12 cursor-pointer hover:bg-transparent">
							<div class="group flex-1 flex text-sm text-[#DADDE3]">
								<Intensity intensity={item.intensity} />
								<ItemRowData label="Time" value={item.time} columnWidthPercent="20" />
								<ItemRowData label="Location" value={item.location} columnWidthPercent="20" />
								<ItemRowData label="Coordinates" value={item.coordinates} columnWidthPercent="20" />
								<ItemRowData label="Distanced" value={item.distanced} columnWidthPercent="20" />
								<ItemRowData label="Depth" value={item.depth} columnWidthPercent="20" />
								<Toggle class="h-12 w-12 rounded-none hover:bg-transparent"
									><ChevronDown class="w-4 text-[#5C5F67]" /></Toggle
								>
							</div>
						</div>
					{/each}
				</section>
			</div>
			<div>compare list</div>
		</div>
		<Separator orientation="vertical" class="mr-5 bg-[#21272F]" decorative />
	</div>
	<div class="w-[596px] bg-[#303547]/20 border border-[#31373F] mb-5" />
</div>
