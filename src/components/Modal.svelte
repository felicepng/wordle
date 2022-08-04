<script lang="ts">
	// @ts-ignore
	import FaSolidCheck from 'svelte-icons-pack/fa/FaSolidCheck';
	// @ts-ignore
	import FiCopy from 'svelte-icons-pack/fi/FiCopy';
	// @ts-ignore
	import FaSolidUndoAlt from 'svelte-icons-pack/fa/FaSolidUndoAlt';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { fade } from 'svelte/transition';
	import {
		CORRECT_WORD,
		gameState,
		GameState,
		boardColors,
		currentCell,
		NUM_COLS,
		isModalVisible
	} from '../store';

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

	let isCopied: boolean = false;
	const handleCopy = () => {
		navigator.clipboard.writeText(colorString + 'by felice png :-)');
		isCopied = true;
	};
</script>

<div
	class="absolute bottom-0 z-10 w-screen h-screen bg-[#000000cc] flex justify-center items-center"
>
	<div
		in:fade
		class="text-center py-4 px-8 border-4 border-gray-900 bg-[#0b101b] text-white rounded-md"
	>
		<div class="text-lg">
			{#if $gameState === GameState.WIN}
				you won! 🎉
			{:else}
				you lost... 😥
			{/if}
		</div>
		<div class="opacity-60 text-base">
			the word was: {$CORRECT_WORD}
		</div>

		<div class="flex flex-col pt-4 pb-6">
			{#each colorString.split('\n') as row}
				<div>{row}</div>
			{/each}
		</div>

		<div class="flex gap-x-3">
			<button
				class="text-sm border-[2.5px] border-gray-700 bg-[#0b101b] hover:bg-gray-800 py-1.5 px-4 rounded-xl"
				on:click={handleCopy}
			>
				{#if isCopied}
					<div class="flex items-center gap-x-1.5">
						<Icon src={FaSolidCheck} size="12px" color="#ffffff" />
						COPIED
					</div>
				{:else}
					<div class="flex items-center gap-x-1.5">
						<Icon src={FiCopy} size="14px" />COPY
					</div>
				{/if}
			</button>
			<button
				class="text-sm border-[2.5px] border-gray-700 bg-[#0b101b] hover:bg-gray-800 py-1.5 px-4 rounded-xl"
				on:click={() => {
					isModalVisible.set(false);
					// TODO: reset board state
				}}
			>
				<div class="flex items-center gap-x-1.5">
					<Icon src={FaSolidUndoAlt} size="12px" color="#ffffff" />
					REPLAY
				</div>
			</button>
		</div>
	</div>
</div>
