<script lang="ts">
	import type { ListItem } from '$lib/ListItem';
	import { Toggle } from '$lib/components/ui/toggle';
	import { ChevronDown } from 'lucide-svelte';
	import Intensity from '$lib/components/ui/Intensity.svelte';
	import ItemRowData from '$lib/components/ui/ItemRowData.svelte';
	import EarthquakeItem from '$lib/components/ui/EarthquakeItem.svelte';

	import { dndzone, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { earthquakeStore } from '$lib/earthquake-store';
	import { compareStore } from '$lib/compare-store';

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
		earthquakeStore.hydrate(items);
	};
</script>

<div class="flex-1 overflow-scroll mt-2">
	<section
		class="flex flex-col"
		use:dndzone={{ items, flipDurationMs, type }}
		on:consider={handleConsider}
		on:finalize={handleFinalize}
	>
		{#each items as item (item.id)}
			<div class="mb-2 p-0 animate:flip={{ duration: flipDurationMs }}">
				<div
					class="relative flex bg-[#4B4F5C]/25 h-12 hover:bg-transparent mr-6 last:mb-0 transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 active:bg-[#0F141B] item"
				>
					<EarthquakeItem {item} />
					{#if item[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
						<div in:fade={{ duration: 500, easing: cubicIn }} class="custom-shadow-item" />
					{/if}
				</div>
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

	:global(#dnd-action-dragged-el .item) {
		background-color: #0f141b;
	}
</style>
