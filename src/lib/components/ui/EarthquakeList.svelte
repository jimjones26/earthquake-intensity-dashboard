<script lang="ts">
	import { Toggle } from '$lib/components/ui/toggle';
	import { ChevronDown } from 'lucide-svelte';
	import Intensity from '$lib/components/ui/Intensity.svelte';
	import ItemRowData from '$lib/components/ui/ItemRowData.svelte';

	import { dndzone, TRIGGERS, SOURCES } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';

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

	export let items: ListItem[] = [];
	export let type: string;
	const flipDurationMs = 200;

	const handleConsider = (e: CustomEvent<DndEvent<ListItem>>) => {
		console.log('consider');
		e.detail.items.sort((itemA: ListItem, itemB: ListItem) => itemA.order - itemB.order);
		items = e.detail.items;
	};

	const handleFinalize = (e: CustomEvent<DndEvent<ListItem>>) => {
		console.log('finalize');
		e.detail.items.sort((itemA: ListItem, itemB: ListItem) => itemA.order - itemB.order);
		items = e.detail.items;
	};
</script>

<div class="flex-1 overflow-scroll mt-2 mb-5">
	<section
		class="flex flex-col"
		use:dndzone={{ items, flipDurationMs, type }}
		on:consider={handleConsider}
		on:finalize={handleFinalize}
	>
		{#each items as item (item.id)}
			<div
				class="mb-2 p-0 bg-[#4B4F5C]/25 h-12 cursor-pointer hover:bg-transparent mr-4 last:mb-0"
				animate:flip={{ duration: flipDurationMs }}
			>
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
