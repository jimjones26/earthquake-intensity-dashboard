<script lang="ts">
	export let items: any = [];
</script>

chart list
{#each items as item (item.id)}
	{item.id}
{/each}
