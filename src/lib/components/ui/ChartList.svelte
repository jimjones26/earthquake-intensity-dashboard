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

	const chartData = [
		{
			'Intensity, points': 4,
			'Magnitude, points': 6,
			'Depth, miles': 4,
			'Distance, miles': 4,
			'Buildings Destroyed': 5,
			'Roads Destroyed': 9,
			'People Injured': 2,
			'People Deaths': 2
		},
		{
			'Intensity, points': 14,
			'Magnitude, points': 16,
			'Depth, miles': 14,
			'Distance, miles': 14,
			'Buildings Destroyed': 15,
			'Roads Destroyed': 19,
			'People Injured': 12,
			'People Deaths': 12
		},
		{
			'Intensity, points': 24,
			'Magnitude, points': 26,
			'Depth, miles': 24,
			'Distance, miles': 24,
			'Buildings Destroyed': 25,
			'Roads Destroyed': 29,
			'People Injured': 22,
			'People Deaths': 22
		}
	];
</script>

<section class="relative w-full h-full grid">
	<!-- div to sit on top of layercake for drag and drop zone -->
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
		<LayerCake data={chartData} x="x" y="y">
			<Svg>
				<AxisX />
				<AxisY />
				<Line />
			</Svg></LayerCake
		>
	</div>
</section>
