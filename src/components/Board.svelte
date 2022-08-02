<script>
	import { board } from '../store';
	import Cell from './Cell.svelte';
</script>

<div class="flex flex-col gap-y-2 justify-center items-center py-10">
	{#each $board as row}
		<div class="flex gap-x-2">
			{#each row as row}
				<Cell />
			{/each}
		</div>
	{/each}
</div>
