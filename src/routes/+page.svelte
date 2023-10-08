<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';
</script>

<div class="flex mt-4 ml-4 mr-4 flex-1">
	<div class="flex-1 flex">
		<div class="flex-1 flex flex-col mr-6">
			<div><Input type="text" placeholder="Search here" /></div>
			<div class="flex items-center mt-4">
				<div class="text-sm text-[#60656D]">List of eathquakes:</div>
				<Separator class="flex-1 ml-2 bg-[#21272F]" decorative />
			</div>
			<!-- Lists of earthquakes-->
			<div class="flex-1 overflow-scroll">list</div>
			<div>compare list</div>
		</div>
		<Separator orientation="vertical" class="mr-4 bg-[#21272F]" decorative />
	</div>
	<div class="w-[596px] bg-[#303547]/20 border border-[#31373F] mb-4" />
</div>
