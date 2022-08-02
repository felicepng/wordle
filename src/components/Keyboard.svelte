<script lang="ts">
	import Key from './Key.svelte';
	import { board, boardState } from '../store';

	const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
	const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
	const row3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'];

	const handleEnter = () => {
		let { row, col } = $boardState;
		if (col !== 6) {
			// TODO: add pop-up notif: invalid guess
			return;
		}
		boardState.set({
			row: row + 1,
			col: 0
		});
	};

	const handleDel = () => {
		if ($boardState.col === 0) {
			return;
		}
		boardState.update((prev) => {
			return {
				row: prev.row,
				col: prev.col - 1
			};
		});
		board.update((prevBoard: string[][]) => {
			const newBoard = prevBoard;
			newBoard[$boardState.row][$boardState.col] = '';
			return newBoard;
		});
	};

	const keyPress = (key = '') => {
		if (key === 'ENTER') {
			handleEnter();
			return;
		}
		if (key === 'DEL') {
			handleDel();
			return;
		}
		let { row, col } = $boardState;
		if (col === 6) {
			return;
		}
		board.update((prevBoard: string[][]) => {
			const newBoard = prevBoard;
			newBoard[row][col++] = key;
			return newBoard;
		});
		boardState.set({ row, col });
	};
</script>

<div class="flex flex-col fixed bottom-0 gap-y-2 items-center w-screen pb-6">
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
