// @ts-ignore
import { words } from 'popular-english-words';
import { writable } from "svelte/store";

export const NUM_ROWS = 6;
export const NUM_COLS = 6;

const createGrid = () => {
  const grid: string[][] = [];

  for (let i = 0; i < NUM_ROWS; i++) {
    grid.push([]);

    for (let j = 0; j < NUM_COLS; j++) {
      grid[i][j] = "";
    }
  }

  return grid;
}

export const currentCell = writable({
  row: 0,
  col: 0
})

const word = words.getMostPopularLength(10000, NUM_COLS)[Math.floor(Math.random() * 10000)];
console.log("word", word.toUpperCase());

export const CORRECT_WORD = writable(word.toUpperCase());
export const board = writable(createGrid());
export const colors = writable(createGrid());