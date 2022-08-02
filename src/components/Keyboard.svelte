<script lang="ts">
	// @ts-ignore
	import { words } from 'popular-english-words';
	import { onMount } from 'svelte';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	import Key from './Key.svelte';
	import { NUM_COLS, CORRECT_WORD, board, currentCell, colors } from '../store';

	const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
	const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
	const row3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'];

	onMount(() => {
		board.update((prev) => {
			const newBoard = prev;
			newBoard[0] = ['F', 'E', 'L', 'I', 'C', 'E'];
			return newBoard;
		});
		handleEnter();
	});

	const showInvalidToast = () => {
		toasts.add({
			description: 'Invalid Guess',
			duration: 2000,
			placement: 'top-right',
			type: 'error'
		});
	};

	const handleEnter = () => {
		let { row, col } = $currentCell;
		if (row !== 0 && col !== NUM_COLS) {
			showInvalidToast();
			return;
		}

		const allWords = words.getAll();
		const currentGuess = $board[row].join('');

		if (row !== 0 && currentGuess !== 'FELICE' && !allWords.includes(currentGuess)) {
			showInvalidToast();
			return;
		}

		currentCell.set({
			row: row + 1,
			col: 0
		});

		const prevRow = $currentCell.row - 1;
		const newColorsBoard = $colors;

		for (let i = 0; i < NUM_COLS; i++) {
			let char = $board[prevRow][i];
			if ($CORRECT_WORD[i] === char) {
				newColorsBoard[prevRow][i] = 'bg-teal-600 border-none';
			} else if ($CORRECT_WORD.includes(char)) {
				newColorsBoard[prevRow][i] = 'bg-yellow-600 border-none';
			} else {
				newColorsBoard[prevRow][i] = 'bg-gray-800 border-none';
			}
		}
		colors.set(newColorsBoard);
	};

	const handleDel = () => {
		if ($currentCell.col === 0) {
			return;
		}
		currentCell.update((prev) => {
			return {
				row: prev.row,
				col: prev.col - 1
			};
		});
		board.update((prev) => {
			const newBoard = prev;
			newBoard[$currentCell.row][$currentCell.col] = '';
			return newBoard;
		});
	};

	const keyPress = (key: string) => {
		if (key === 'ENTER') {
			handleEnter();
			return;
		}
		if (key === 'DEL') {
			handleDel();
			return;
		}
		let { row, col } = $currentCell;
		if (col === NUM_COLS) {
			return;
		}

		board.update((prev) => {
			const newBoard = prev;
			newBoard[row][col++] = key;
			return newBoard;
		});
		currentCell.set({ row, col });
	};
</script>

<div class="bg-black flex flex-col fixed bottom-0 gap-y-2 items-center w-screen pb-6">
	<div class="flex gap-x-2">
		{#each row1 as char}
			<Key {char} {keyPress} />
		{/each}
	</div>
	<div class="flex gap-x-2">
		{#each row2 as char}
			<Key {char} {keyPress} />
		{/each}
	</div>
	<div class="flex gap-x-2">
		{#each row3 as char}
			<Key {char} {keyPress} />
		{/each}
	</div>
</div>

<ToastContainer let:data>
	<FlatToast {data} />
</ToastContainer>
