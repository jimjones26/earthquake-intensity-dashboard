<script lang="ts">
	export let intensity: any;
</script>

<div
	class="flex min-h-12 min-h-12 h-12 w-12 justify-center items-center mr-4 {intensity <= 2.9
		? 'green'
		: intensity <= 5.9
		? 'yellow'
		: 'red'} group-hover:opacity-80 transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500"
>
	{intensity}
</div>

<style>
	.red {
		background: repeating-linear-gradient(
			-45deg,
			#473633,
			#473633 2.5px,
			#3e2d29 2.5px,
			#3e2d29 5px
		);
	}
	.yellow {
		background: repeating-linear-gradient(
			-45deg,
			#4d4c36,
			#4d4c36 2.5px,
			#45442f 2.5px,
			#45442f 5px
		);
	}
	.green {
		background: repeating-linear-gradient(
			-45deg,
			#314f48,
			#314f48 2.5px,
			#27443e 2.5px,
			#27443e 5px
		);
	}
</style>
