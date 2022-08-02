<script>
	import { board } from '../store';
	import Cell from './Cell.svelte';
</script>

<div class="flex flex-col gap-y-2 justify-center items-center py-8">
	{#each $board as row, y}
		<div class="flex gap-x-2">
			{#each row as _, x}
				<Cell {x} {y} />
			{/each}
		</div>
	{/each}
</div>
