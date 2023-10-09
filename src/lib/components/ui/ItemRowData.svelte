<script lang="ts">
	export let label: any;
	export let value: any;
	export let columnWidthPercent: any;
</script>

<div class="flex flex-col basis-[{columnWidthPercent}%] items-start justify-center">
	<span class="text-[#6B6E76] text-xs">{label}</span><span>{value}</span>
</div>
