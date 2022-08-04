// @ts-ignore
import { words } from 'popular-english-words';
// @ts-ignore
import wordExists from 'word-exists';
import { writable } from "svelte/store";

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
    keyboard[i] = "bg-[#b9c6d6] sm:hover:bg-slate-400 dark:text-white dark:bg-gray-700 dark:sm:hover:bg-gray-800";
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

export const CORRECT_WORD = writable(word.toUpperCase());
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
export const isDarkMode = writable(true);