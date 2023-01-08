import { words } from 'popular-english-words';
import wordExists from 'word-exists';
import { writable, readable } from "svelte/store";
import { browser } from "$app/env"

const NUM_POOL = 500;
const NUM_ROWS = 6;
export const NUM_COLS = 6;

const createBoard = () => {
	const newBoard: string[][] = [];

	for (let i = 0; i < NUM_ROWS; i++) {
		newBoard.push([]);
		for (let j = 0; j < NUM_COLS; j++) {
			newBoard[i][j] = "";
		}
	}
	return newBoard;
}

const createKeyboard = () => {
	const keyboard = [];

	for (let i = 0; i < 26; i++) {
		keyboard[i] = "bg-[#cbd7e6] sm:hover:bg-[#abbacd] dark:text-white dark:bg-gray-700 dark:sm:hover:bg-gray-800";
	}
	return keyboard;
}

export const currentCell = writable({
	row: 0,
	col: 0
})

let word;
do {
	word = words.getMostPopularLength(NUM_POOL, NUM_COLS)[Math.floor(Math.random() * NUM_POOL)];
} while (!wordExists(word));

export const CORRECT_WORD = readable(word.toUpperCase());
export const board = writable(createBoard());
export const boardColors = writable(createBoard());
export const keyboardColors = writable(createKeyboard());

export enum GameState {
	RUNNING = "RUNNING",
	WIN = "WIN",
	LOSE = "LOSE"
}
export const gameState = writable(GameState.RUNNING);
export const isModalVisible = writable(false);

export const isDarkMode = writable(browser && localStorage.getItem("theme") === "dark");
isDarkMode.subscribe((value) => {
	if (browser) {
		document.documentElement.setAttribute('theme', value ? 'dark' : 'light');
		localStorage.theme = value ? 'dark' : 'light';
	}
});