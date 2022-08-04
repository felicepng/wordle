<script lang="ts">
	import { fade } from 'svelte/transition';
	import { board, boardColors } from '../store';

	export let row: number;
	export let col: number;
	$: char = $board[row][col];
	$: color = $boardColors[row][col];

	const defaultStyle: string =
		'h-12 w-12 sm:h-16 sm:w-16 2xl:w-[72px] 2xl:h-[72px] border border-slate-500 dark:border-gray-600 text-white font-bold text-3xl sm:text-4xl flex justify-center items-center';
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
