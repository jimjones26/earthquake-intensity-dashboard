<script lang="ts">
	import type { ListItem } from '$lib/ListItem';
	import { Toggle } from '$lib/components/ui/toggle';
	import { ChevronDown } from 'lucide-svelte';
	import Intensity from '$lib/components/ui/Intensity.svelte';
	import ItemRowData from '$lib/components/ui/ItemRowData.svelte';
	import { dndzone, TRIGGERS, SOURCES, alertToScreenReader } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';

	export let items: ListItem[] = [];
	export let type: string;

	const flipDurationMs = 200;
	const maxItems = 3;
	let dropFromOthersDisabled = false;

	const handleConsider = (e: CustomEvent<DndEvent<ListItem>>) => {
		console.log('consider');
		e.detail.items.sort((itemA: ListItem, itemB: ListItem) => itemA.order - itemB.order);
		items = e.detail.items;
	};

	const handleFinalize = (e: CustomEvent<DndEvent<ListItem>>) => {
		console.log('finalize');
		e.detail.items.sort((itemA: any, itemB: any) => itemA.order - itemB.order);
		items = e.detail.items;
		dropFromOthersDisabled = items.length >= maxItems;
	};
</script>

<div class="flex flex-1 mt-2 mb-5">
	<section
		class="flex-1 flex flex-col justify-center"
		use:dndzone={{ items, flipDurationMs, type, dropFromOthersDisabled }}
		on:consider={handleConsider}
		on:finalize={handleFinalize}
	>
		{#each items as item (item.id)}
			<div><div class="hidden">{item.id}</div></div>
		{/each}
	</section>
</div>
