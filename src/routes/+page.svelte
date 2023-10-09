<script lang="ts">
	import type { PageData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';
	import { Toggle } from '$lib/components/ui/toggle';
	import { ChevronDown } from 'lucide-svelte';
	import Intensity from '$lib/components/ui/Intensity.svelte';
	import ItemRowData from '$lib/components/ui/ItemRowData.svelte';

	export let data: PageData;
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
			<div class="flex-1 overflow-scroll mt-2">
				<section class="flex flex-col">
					{#each data.earthquakes as item}
						<div class="mb-2 p-0 bg-[#4B4F5C]/25 h-12 cursor-pointer hover:bg-transparent mr-4">
							<div class="group flex-1 flex text-sm text-[#DADDE3]">
								<Intensity intensity={item.intensity} />
								<ItemRowData label="Time" value={item.time} columnWidthPercent="20" />
								<ItemRowData label="Location" value={item.location} columnWidthPercent="30" />
								<ItemRowData label="Coordinates" value={item.coordinates} columnWidthPercent="30" />
								<ItemRowData label="Distanced" value={item.distanced} columnWidthPercent="10" />
								<ItemRowData label="Depth" value={item.depth} columnWidthPercent="10" />
								<Toggle class="h-12 w-12 rounded-none hover:bg-transparent"
									><ChevronDown class="w-4 text-[#5C5F67]" /></Toggle
								>
							</div>
						</div>
					{/each}
				</section>
			</div>
			<div class="my-5 mr-4 bg-slate-100">compare list</div>
		</div>
		<Separator orientation="vertical" class="mr-5 bg-[#21272F]" decorative />
	</div>
	<div class="w-[596px] bg-[#303547]/20 border border-[#31373F] mb-5" />
</div>
