import Sudoku from "./sudokusolver";
export const resolvers = {
    newboard: async () => {
        const sudoku = new Sudoku({ mode: "9" });
        sudoku.generate();
        const grid = sudoku.grid;
        try {
            return {
                grid: {
                    value: grid,
                    solution: async () => {
                        const nsudoku = new Sudoku();
                        nsudoku.setBoard(grid);
                        const solgrid = nsudoku.solve();
                        return solgrid;
                    }
                },
                difficulty: sudoku.getDifficulty(),
                message: 'All Ok',
            };
        } catch (e) {
            return {
                message: e.toString()
            }
        }
    }
}