<script lang="ts">
	import type { ListItem } from '$lib/ListItem';
	import { dndzone } from 'svelte-dnd-action';
	import { compareStore } from '$lib/compare-store';

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
</script>

<div class="flex flex-1 mt-2 mb-5">
	<section
		class="flex-1 flex flex-col justify-center"
		use:dndzone={{ items, flipDurationMs, type, dropFromOthersDisabled, dropTargetStyle: {} }}
		on:consider={handleConsider}
		on:finalize={handleFinalize}
	>
		{#each items as item (item.id)}
			<div><div class="hidden">{item.id}</div></div>
		{/each}
	</section>
</div>
