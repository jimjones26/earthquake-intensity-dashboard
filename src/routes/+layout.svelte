<script>
	import '../app.postcss';
	import { Button } from '$lib/components/ui/button';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Separator } from '$lib/components/ui/separator';
	import { Menu } from 'lucide-svelte';
</script>

<header class="flex bg-[#0C1115] p-4 items-center">
	<Button variant="outline" size="icon" class="w-9 h-9"><Menu class="h-5 w-5" /></Button>
	<div class="flex">
		<span>img</span>
		<h4>test</h4>
	</div>
	<div class="flex flex-1 justify-center">
		<div class="bg-[#1F232F] rounded">
			<Toggle size="sm">Overview</Toggle>
			<Toggle size="sm">Real Time Activity</Toggle>
			<Toggle size="sm">Prediction</Toggle>
			<Toggle size="sm">History</Toggle>
			<Toggle size="sm">Comparison</Toggle>
		</div>
	</div>
	<div class="flex">
		<div class="flex items-center">
			<p class="font-bold text-[#E9DF9D] px-4">12</p>
			<p class="text-xs leading-4">Number of<br /> Earthquakes</p>
			<Separator orientation="vertical" class="bg-[#1D2125] ml-4 h-[90%]" />
		</div>
		<div class="flex items-center">
			<p class="font-bold text-[#E9DF9D] px-4">4</p>
			<p class="text-xs leading-4">Average<br /> Frequency</p>
			<Separator orientation="vertical" class="bg-[#1D2125] ml-4 h-[90%]" />
		</div>
		<div class="flex items-center">
			<p class="font-bold text-[#E9DF9D] px-4">6.0</p>
			<p class="text-xs leading-4">Maximum<br /> Magnitude</p>
			<Separator orientation="vertical" class="bg-[#1D2125] ml-4 h-[90%]" />
		</div>
		<div class="flex items-center mr-4">
			<p class="font-bold text-[#E9DF9D] px-4">2.0</p>
			<p class="text-xs leading-4">Minimum<br /> Magnitude</p>
		</div>
	</div>
</header>
<slot />
