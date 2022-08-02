import { writable } from "svelte/store"

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

export const CORRECT_WORD = writable("FELICE")
export const guess = writable("")
export const colors = writable(createGrid());
export const board = writable(createGrid());