<script lang="ts">
	import { board, colors } from '../store';

	export let row: number;
	export let col: number;
	$: char = $board[row][col];
	$: color = $colors[row][col];
</script>

<div
	class={`${color} cell h-16 w-16 border border-gray-500 text-white font-bold text-3xl flex justify-center items-center`}
>
	{char}
</div>

<style>
	.cell {
		transition: background-color 0.7s;
	}
</style>
