<script>
	import '../app.postcss';
	import { Button } from '$lib/components/ui/button';
	import { Toggle } from '$lib/components/ui/toggle';
	import { Separator } from '$lib/components/ui/separator';
	import { Menu } from 'lucide-svelte';
	import { Activity } from 'lucide-svelte';
	import { BarChart } from 'lucide-svelte';
	import { List } from 'lucide-svelte';
	import { Columns } from 'lucide-svelte';
	import { LayoutDashboard } from 'lucide-svelte';
</script>

<div class="relative w-full h-full overflow-auto">
	<!-- bg tile -->
	<div class="w-screen h-screen overflow-auto">
		<svg width="100%" height="100%">
			<defs>
				<pattern id="polka-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
					<circle fill="#171E29" cx="15" cy="15" r="2" />
				</pattern>
			</defs>

			<rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
		</svg>
	</div>

	<!-- content -->
	<div class="absolute top-0 right-0 bottom-0 left-0 overflow-auto">
		<!-- header -->
		<header class="flex bg-[#0C1115] p-4 items-center">
			<Button variant="outline" size="icon" class="w-9 h-9"><Menu class="h-5 w-5" /></Button>
			<div class="flex">
				<span>img</span>
				<h4>test</h4>
			</div>
			<div class="flex flex-1 justify-center">
				<div class="bg-[#1F232F] text-[#62656F] rounded">
					<Toggle size="sm"><LayoutDashboard class="w-[18px] h-[14px] mr-1" />Overview</Toggle>
					<Toggle size="sm"><Activity class="w-[18px] h-[14px] mr-1" />Real Time Activity</Toggle>
					<Toggle size="sm"><BarChart class="w-[18px] h-[14px] mr-1" />Prediction</Toggle>
					<Toggle size="sm"><List class="w-[18px] h-[14px] mr-1" />History</Toggle>
					<Toggle size="sm" pressed><Columns class="w-[18px] h-[14px] mr-1" />Comparison</Toggle>
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
		<!-- slot -->
		<slot />
	</div>
</div>
