<script lang="ts">
	import type { ListItem } from '$lib/ListItem';
	import { dndzone } from 'svelte-dnd-action';
	import { compareStore } from '$lib/compare-store';
	import { LayerCake, Svg } from 'layercake';
	import AxisX from './charts/AxisX.svelte';
	import AxisY from './charts/AxisY.svelte';
	import Line from './charts/Line.svelte';

	export let items: ListItem[] = [];
	export let type: string;

	const flipDurationMs = 200;
	const maxItems = 3;
	$: dropFromOthersDisabled = $compareStore.dropFromOtherDisabled;

	const handleConsider = (e: CustomEvent<DndEvent<ListItem>>) => {
		console.log('consider');
		e.detail.items.sort((itemA: ListItem, itemB: ListItem) => itemA.order - itemB.order);
		items = e.detail.items;
	};

	const handleFinalize = (e: CustomEvent<DndEvent<ListItem>>) => {
		console.log('finalize');
		e.detail.items.sort((itemA: any, itemB: any) => itemA.order - itemB.order);
		items = e.detail.items;
		if (items.length >= maxItems) {
			// update store to true
			compareStore.updateDropDisabled(true);
		} else {
			//update store to false
			compareStore.updateDropDisabled(false);
		}
		compareStore.hydrate(items);
	};

	const points = [
		{ x: 0, y: 0 },
		{ x: 5, y: 10 },
		{ x: 10, y: 20 },
		{ x: 15, y: 30 },
		{ x: 20, y: 40 }
	];
</script>

<section class="relative w-full h-full grid">
	<!-- div to sti on top of layercake for drag and drop zone -->
	<div
		class="absolute w-full h-full flex flex-col items-center justify-center"
		use:dndzone={{ items, flipDurationMs, type, dropFromOthersDisabled, dropTargetStyle: {} }}
		on:consider={handleConsider}
		on:finalize={handleFinalize}
	>
		{#each items as item (item.id)}
			<div class="grid items-center justify-center">
				<div class="hidden">{item.id}</div>
			</div>
		{/each}
	</div>

	<!-- div that sits underneath. this should be layercake?-->
	<div class="w-full h-full z-0 hover:bg-red-600/25">
		<LayerCake data={points} x="x" y="y">
			<Svg>
				<AxisX />
				<AxisY />
				<Line />
			</Svg></LayerCake
		>
	</div>
</section>
