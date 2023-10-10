<script lang="ts">
	import type { ListItem } from '$lib/ListItem';
	import { Toggle } from '$lib/components/ui/toggle';
	import { ChevronDown } from 'lucide-svelte';
	import Intensity from '$lib/components/ui/Intensity.svelte';
	import ItemRowData from '$lib/components/ui/ItemRowData.svelte';

	import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';

	export let items: any[] = [];
	export let type: string;
	const flipDurationMs = 200;

	const handleConsider = (e: CustomEvent<DndEvent<ListItem>>) => {
		console.log('consider');
		e.detail.items.sort((itemA: any, itemB: any) => itemA.order - itemB.order);
		items = e.detail.items;
	};

	const handleFinalize = (e: CustomEvent<DndEvent<ListItem>>) => {
		console.log('finalize');
		e.detail.items.sort((itemA: any, itemB: any) => itemA.order - itemB.order);
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
				class="relative mb-2 p-0 bg-[#4B4F5C]/25 h-12 cursor-pointer hover:bg-transparent mr-4 last:mb-0"
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
				{#if item[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
					<div in:fade={{ duration: 200, easing: cubicIn }} class="custom-shadow-item" />
				{/if}
			</div>
		{/each}
	</section>
</div>

<style>
	.custom-shadow-item {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		visibility: visible;
		background-color: #1c233080;
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23414650FF' stroke-width='2' stroke-dasharray='5%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
	}
</style>
