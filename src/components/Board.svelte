<script>
	import { board } from '../store';
	import Cell from './Cell.svelte';
</script>

<div class="flex flex-col gap-y-1.5 sm:gap-y-2 justify-center items-center py-8">
	{#each $board as rows, row}
		<div class="flex gap-x-1.5 sm:gap-x-2">
			{#each rows as _, col}
				<Cell {row} {col} />
			{/each}
		</div>
	{/each}
</div>
