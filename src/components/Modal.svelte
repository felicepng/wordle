<script lang="ts">
	// @ts-ignore
	import FaSolidCheck from 'svelte-icons-pack/fa/FaSolidCheck';
	// @ts-ignore
	import FiCopy from 'svelte-icons-pack/fi/FiCopy';
	// @ts-ignore
	import FaSolidUndoAlt from 'svelte-icons-pack/fa/FaSolidUndoAlt';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	// @ts-ignore
	import { Confetti } from 'svelte-confetti';
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
		navigator.clipboard.writeText(colorString + 'made by felice png');
		isCopied = true;
	};
</script>

<div
	on:click={() => isModalVisible.set(false)}
	class="absolute bottom-0 z-10 w-screen h-screen bg-[#000000cc] flex justify-center items-center"
>
	{#if $gameState === GameState.WIN}
		<div class="absolute -mt-28">
			<Confetti x={[-0.5, 0.5]} />
			<Confetti amount="10" x={[-0.75, -0.3]} y={[0.15, 0.75]} />
			<Confetti amount="10" x={[0.3, 0.75]} y={[0.15, 0.75]} />
		</div>
	{/if}
	<div
		on:click={(e) => e.stopPropagation()}
		in:fade
		out:fade={{ duration: 250 }}
		class="text-center py-4 px-8 border-4 border-gray-900 bg-[#0b101b] text-white rounded-md"
	>
		<div class="text-2xl">
			{#if $gameState === GameState.WIN}
				you won! 🎉
			{:else}
				you lost... 🙇‍♂️
			{/if}
		</div>
		<div class="opacity-60 text-xl">
			the word was: {$CORRECT_WORD}
		</div>

		<div class="flex flex-col pt-4 pb-6">
			{#each colorString.split('\n') as row}
				<div>{row}</div>
			{/each}
		</div>

		<div class="flex gap-x-3">
			<button
				class="text-lg border-[2.5px] border-gray-700 bg-[#0b101b] hover:bg-gray-800 py-1.5 px-4 rounded-xl"
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
				class="text-lg border-[2.5px] border-gray-700 bg-[#0b101b] hover:bg-gray-800 py-1.5 px-4 rounded-xl"
				on:click={() => {
					isModalVisible.set(false);
					window.location.reload();
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
