import Sudoku from "./sudokusolver";
const genBoard = () => {
    const sudoku = new Sudoku({ mode: "9" });
    sudoku.generate();
    const grid = sudoku.grid;
    return {
        value: grid,
        solution: async () => {
            const nsudoku = new Sudoku();
            nsudoku.setBoard(grid);
            const solgrid = nsudoku.solve();
            return solgrid;
        },
        difficulty: sudoku.getDifficulty(),
    };
}
export const resolvers = {
    newboard: async ({ limit }) => {
        const resArray = [];
        try {
            if (limit <= 20) {
                for (let i = 0; i < limit; i++) {
                    resArray.push(genBoard());
                }
                return {
                    grids: resArray,
                    results: limit,
                    message: 'All Ok'
                };
            } else {
                return {
                    grids: [genBoard()],
                    results: 1,
                    message: 'The limit is set to 20 for now!'
                };
            }
        } catch (e) {
            return {
                message: e.toString()
            }
        }
    }
}