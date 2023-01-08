<script lang="ts">
	import { board } from '../store';
	import Cell from './Cell.svelte';
</script>

<div
	class="overflow-y-scroll bg-slate-50 dark:bg-black flex flex-col gap-y-1.5 sm:gap-y-2 m-auto pt-2"
>
	{#each $board as rows, row}
		<div class="flex gap-x-1.5 sm:gap-x-2">
			{#each rows as _, col}
				<Cell {row} {col} />
			{/each}
		</div>
	{/each}
</div>
