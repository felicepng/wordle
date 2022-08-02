<script lang="ts">
	import { board, colors } from '../store';

	export let row: number;
	export let col: number;
	$: char = $board[row][col];
	$: color = $colors[row][col];
</script>

<div
	class={`${color} h-16 w-16 border border-gray-500 text-white font-bold text-3xl flex justify-center items-center`}
>
	{char}
</div>
