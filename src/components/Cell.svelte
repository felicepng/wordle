<script lang="ts">
	import { board } from '../store';

	export let x: number;
	export let y: number;
	$: letter = $board[y][x];

	board.update((prevBoard: string[][]) => {
		const newBoard = prevBoard;
		newBoard[1][1] = 'H';
		return newBoard;
	});
</script>

<div class="h-16 w-16 bg-green-600 text-white font-bold text-3xl flex justify-center items-center">
	{letter}
</div>
