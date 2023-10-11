<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import Intensity from './Intensity.svelte';
	import ItemRowData from './ItemRowData.svelte';
	import { Toggle } from './toggle';

	export let item: any;
	export let canDelete: boolean;
</script>

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
	{#if canDelete}
		TRASH
	{/if}
</div>
