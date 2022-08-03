<script lang="ts">
	import { fade } from 'svelte/transition';
	import { board, boardColors } from '../store';

	export let row: number;
	export let col: number;
	$: char = $board[row][col];
	$: color = $boardColors[row][col];

	const defaultStyle: string =
		'h-12 w-12 md:h-16 md:w-16 border border-gray-500 text-white font-bold text-2xl md:text-3xl flex justify-center items-center';
</script>

{#if color}
	<div in:fade={{ delay: 200 * (col - 1) }} class={`${color} ${defaultStyle}`}>
		{char}
	</div>
{:else}
	<div class={defaultStyle}>
		{char}
	</div>
{/if}
