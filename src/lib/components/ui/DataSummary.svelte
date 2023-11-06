<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';

	export let summaryData: any;
</script>

<div class="flex">
	{#each summaryData as summary, i}
		<div class="flex items-center">
			<p class="font-bold text-lg text-[#E9DF9D] px-4">{summary.value}</p>
			<p class="text-sm font-bold leading-4 max-w-[95px]">{summary.label}</p>
			{#if i !== summaryData.length - 1}
				<Separator orientation="vertical" class="bg-[#1D2125] ml-4 h-[90%]" />
			{/if}
		</div>
	{/each}
</div>
