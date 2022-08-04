<script>
	import { fade } from 'svelte/transition';
	import { CORRECT_WORD, gameState, GameState, boardColors, currentCell, NUM_COLS } from '../store';

	let colorString = '';
	for (let row = 0; row < $currentCell.row; row++) {
		for (let col = 0; col < NUM_COLS; col++) {
			if ($boardColors[row][col] === 'bg-teal-600 border-none') {
				colorString += '🟩';
			} else if ($boardColors[row][col] === 'bg-yellow-600 border-none') {
				colorString += '🟨';
			} else {
				colorString += '⬛';
			}
		}
		colorString += '\n';
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(colorString + 'created by felice :)');
	};
</script>

<div
	class="absolute bottom-0 z-10 w-screen h-screen bg-[#000000AA] flex justify-center items-center"
>
	<div in:fade class="py-5 px-7 bg-gray-900 text-white text-lg rounded-md">
		<div>
			{#if $gameState === GameState.WIN}
				You Won!
			{:else}
				You Lost...
			{/if}
		</div>
		<div>
			The word was {$CORRECT_WORD}
		</div>

		<div class="flex flex-col">
			{#each colorString.split('\n') as row}
				<div>{row}</div>
			{/each}
		</div>

		<button on:click={handleCopy}>Copy</button>

		<button on:click={() => {}}>Replay</button>
	</div>
</div>
