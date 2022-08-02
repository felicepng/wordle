<script lang="ts">
	import { board } from '../store';

	export let row: number;
	export let col: number;
	$: char = $board[row][col];
</script>

<div class="h-16 w-16 bg-green-600 text-white font-bold text-3xl flex justify-center items-center">
	{char}
</div>
