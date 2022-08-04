<script lang="ts">
	// @ts-ignore
	import wordExists from 'word-exists';
	import { onMount } from 'svelte';
	import { toasts, ToastContainer } from 'svelte-toasts';
	import Key from './Key.svelte';
	import Toast from './Toast.svelte';
	import {
		NUM_COLS,
		CORRECT_WORD,
		board,
		currentCell,
		boardColors,
		keyboardColors,
		gameState,
		GameState,
		isModalVisible
	} from '../store';

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
			placement: 'top-left',
			type: 'error',
			// @ts-ignore
			component: Toast
		});
	};

	const handleEnter = () => {
		let { row, col } = $currentCell;
		if (row !== 0 && col !== NUM_COLS) {
			showInvalidToast();
			return;
		}

		const currentGuess = $board[row].join('');
		if (currentGuess !== 'FELICE' && !wordExists(currentGuess)) {
			showInvalidToast();
			return;
		}

		currentCell.set({
			row: row + 1,
			col: 0
		});
		handleColorChange();

		if (currentGuess === $CORRECT_WORD) {
			gameState.set(GameState.WIN);
			setTimeout(() => isModalVisible.set(true), 1200);
			return;
		}

		if (row === 5 && currentGuess !== $CORRECT_WORD) {
			gameState.set(GameState.LOSE);
			setTimeout(() => isModalVisible.set(true), 1200);
			return;
		}
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

	const handleKeyPress = (key: string) => {
		if ($gameState !== GameState.RUNNING) {
			return;
		}
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

	const handleKeydown = (e: KeyboardEvent) => {
		e.preventDefault();
		if ($gameState !== GameState.RUNNING) {
			return;
		}

		if ((e.key.length === 1 && e.key.match(/[a-z]/i)) || e.key === 'Enter') {
			handleKeyPress(e.key.toUpperCase());
		} else if (e.key === 'Backspace') {
			handleKeyPress('DEL');
		}

		if (document.activeElement && document.activeElement !== document.body) {
			(document.activeElement as HTMLElement).blur();
		}
	};

	const handleColorChange = () => {
		const prevRow = $currentCell.row - 1;
		const newBoardColors = $boardColors;
		const newKeyboardColors = $keyboardColors;
		let correctWordTemp = $CORRECT_WORD;

		newBoardColors[prevRow] = Array(NUM_COLS).fill('bg-gray-800 border-none');
		for (let i = 0; i < NUM_COLS; i++) {
			const char = $board[prevRow][i];
			if (correctWordTemp[i] === char) {
				newBoardColors[prevRow][i] = 'bg-teal-600 border-none';
				newKeyboardColors[char.charCodeAt(0) - 65] = 'bg-teal-600 hover:bg-teal-700';
				correctWordTemp = correctWordTemp.replace(char, ' ');
			}
		}

		for (let i = 0; i < NUM_COLS; i++) {
			const char = $board[prevRow][i];
			if (
				newBoardColors[prevRow][i] !== 'bg-teal-600 border-none' &&
				correctWordTemp.includes(char)
			) {
				newBoardColors[prevRow][i] = 'bg-yellow-600 border-none';
				correctWordTemp = correctWordTemp.replace(char, ' ');

				if (newKeyboardColors[char.charCodeAt(0) - 65] !== 'bg-teal-600 hover:bg-teal-700') {
					newKeyboardColors[char.charCodeAt(0) - 65] = 'bg-yellow-600 hover:bg-yellow-700';
				}
			}
		}
		boardColors.set(newBoardColors);
		keyboardColors.set(newKeyboardColors);
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="bg-black flex flex-col fixed bottom-0 gap-y-1.5 sm:gap-y-2 items-center w-screen pt-4 pb-8 sm:pb-6 2xl:pb-10"
>
	<div class="flex gap-x-1.5 sm:gap-x-2">
		{#each row1 as char}
			<Key {char} {handleKeyPress} />
		{/each}
	</div>
	<div class="flex gap-x-1.5 sm:gap-x-2">
		{#each row2 as char}
			<Key {char} {handleKeyPress} />
		{/each}
	</div>
	<div class="flex gap-x-1.5 sm:gap-x-2">
		{#each row3 as char}
			<Key {char} {handleKeyPress} />
		{/each}
	</div>
</div>

<ToastContainer let:data>
	<Toast {data} />
</ToastContainer>
