<script lang="ts">
	export let label: any;
	export let value: any;
	export let columnWidthPercent: any;
</script>

<div style="flex-basis: {columnWidthPercent}%;" class="flex flex-col items-start justify-center">
	<span class="text-[#6B6E76] text-xs">{label}</span><span>{value}</span>
</div>
