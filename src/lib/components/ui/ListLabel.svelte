<script lang="ts">
	import { Separator } from './separator';

	export let label: string;
</script>

<div class="flex items-center mt-3">
	<div class="text-sm text-[#60656D]">{label}</div>
	<Separator class="flex-1 ml-2 bg-[#21272F]" decorative />
</div>
