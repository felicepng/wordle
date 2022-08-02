import { writable } from "svelte/store"

const createGrid = () => {
  const grid: string[][] = [];

  for (let i = 0; i < 6; i++) {
    grid.push([]);
    for (let j = 0; j < 6; j++) {
      grid[i][j] = "";
    }
  }

  return grid;
}

export const boardState = writable({
  row: 0,
  col: 0
})

export const board = writable(createGrid());