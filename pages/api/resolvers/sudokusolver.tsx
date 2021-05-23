type ModeType = {
  width: number
  height: number
  lowerSize: number
  higherSize: number
}

type ModesType = {
  [index: string]: ModeType
}

type SudokuOptionsType = {
  grid?: Array<number[]>
  mode?: "4" | "6" | "8" | "9"
}

const MODES: ModesType = {
  "4": { width: 2, height: 2, lowerSize: 4, higherSize: 8 },
  "6": { width: 3, height: 2, lowerSize: 9, higherSize: 18 },
  "8": { width: 2, height: 4, lowerSize: 18, higherSize: 36 },
  "9": { width: 3, height: 3, lowerSize: 17, higherSize: 40 }
}

const Difficulties = {
  1: 'Easy',
  2: 'Medim',
  3: 'Hard'
}
const DEFAULT_MODE = "9"

export default class Sudoku {
  grid: Array<number[]>
  mode: ModeType
  blockSize: number
  numbers: number[]

  constructor(options: SudokuOptionsType = {}) {
    let modeKey: string

    if (options.grid) {
      modeKey = options.grid.length.toString()
    } else {
      modeKey = options.mode || DEFAULT_MODE
    }

    this.mode = MODES[modeKey]
    this.blockSize = this.mode.width * this.mode.height
    this.numbers = [...Array(this.blockSize)].map((_, i) => i + 1)
    this.grid = options.grid || this.defaultGrid()
  }

  reset() {
    this.grid = this.defaultGrid()
  }

  setBoard = (board: number[][]) => {
    this.grid = board;
  }

  getCount = () => {
    let count = 0;
    this.grid.map((val) => {
      val.map((j) => {
        if (j > 0) {
          count++;
        }
      })
    })
    return count;
  }

  getDifficulty = () => {
    let ans = '';
    const count = this.getCount();
    if (count >= 40 && count <= 81) {
      ans = 'Easy';
    } else if (count >= 25 && count < 40) {
      ans = 'Medium';
    } else if (count > 0 && count < 25) {
      ans = 'Hard';
    }
    return ans;
  }

  generate(): void {
    this.reset()

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min

    const randInSizeRange = () => rand(0, this.blockSize - 1)
    const { lowerSize, higherSize } = this.mode
    const minAllowedSize = Math.floor(this.blockSize / 3)
    const maxAllowedSize = this.blockSize - 2
    const gridCellSize = this.blockSize ** 2

    let baseNumbers = lowerSize

    while (baseNumbers > 0) {
      const fillX = randInSizeRange()
      const fillY = randInSizeRange()
      const allowedNumbers = this.allowedNumbers(fillX, fillY)

      if (allowedNumbers.length > minAllowedSize) {
        const randomIndex = rand(0, allowedNumbers.length - 1)
        this.set(fillX, fillY, allowedNumbers[randomIndex])
        baseNumbers--
      }
    }

    if (!this.solve()) {
      return this.generate()
    }

    let digNumbers = gridCellSize - rand(lowerSize, higherSize)

    while (digNumbers > 0) {
      const digX = randInSizeRange()
      const digY = randInSizeRange()

      if (
        this.get(digX, digY) &&
        this.allowedNumbers(digX, digY).length < maxAllowedSize
      ) {
        this.set(digX, digY, 0)
        digNumbers--
      }
    }
  }

  defaultGrid() {
    return [...Array(this.blockSize)].map(x => [
      ...Array(this.blockSize).fill(0)
    ])
  }

  get(x: number, y: number): number {
    return this.grid[y][x]
  }

  set(x: number, y: number, value: number): Error | number {
    if (value) {
      if (this.get(x, y) === value) {
        return value
      }

      if (!this.allowedNumbersInRow(y).includes(value)) {
        throw new Error(`${value} is not allowed in the row ${y}`)
      }

      if (!this.allowedNumbersInColumn(x).includes(value)) {
        throw new Error(`${value} is not allowed in the column ${x}`)
      }

      if (!this.allowedNumbersInBlock(x, y).includes(value)) {
        throw new Error(`${value} is not allowed in the block ${y}`)
      }
    }

    return (this.grid[y][x] = value)
  }

  row(y: number): number[] {
    return this.grid[y]
  }

  column(x: number): number[] {
    return this.grid.map(row => row[x])
  }

  allowedNumbersInRow(y: number) {
    const row = this.row(y)
    return this.numbers.filter(num => !row.includes(num))
  }

  allowedNumbersInColumn(x: number) {
    const column = this.column(x)
    return this.numbers.filter(num => !column.includes(num))
  }

  allowedNumbersInBlock(x: number, y: number) {
    const { width, height } = this.mode
    const bx = Math.floor(x / width) * width
    const by = Math.floor(y / height) * height

    let numbersInBlock: number[] = []

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
        numbersInBlock.push(this.get(bx + i, by + j))
      }
    }

    return this.numbers.filter(num => !numbersInBlock.includes(num))
  }

  allowedNumbers(x: number, y: number) {
    const numbersInBlock = this.allowedNumbersInBlock(x, y)

    if (numbersInBlock.length > 1) {
      const numbersInRow = this.allowedNumbersInRow(y)
      const numbersInColumn = this.allowedNumbersInColumn(x)
      return numbersInBlock.filter(
        num => numbersInRow.includes(num) && numbersInColumn.includes(num)
      )
    } else {
      return numbersInBlock
    }
  }

  emptyCells() {
    let cells: Array<[number, number]> = []

    this.grid.forEach((row, y) => {
      row.forEach((num, x) => {
        !num && cells.push([x, y])
      })
    })

    return cells
  }

  anyEmptyCell(allowedNumbersLength = this.blockSize + 1) {
    let cell: number[] = []

    this.emptyCells().some((emptyCell: number[]) => {
      const [x, y] = emptyCell
      const length = this.allowedNumbers(x, y).length

      if (length < allowedNumbersLength) {
        cell = emptyCell
        allowedNumbersLength = length
      }

      return length === 1
    })

    return cell
  }

  isSolved() {
    return this.grid.every((row, y) => row.every((num, x) => num))
  }

  solve() {
    const flag = this.solveUltimately();
    if (flag) {
      return this.grid;
    }
    return null;
  }

  solveUltimately() {
    if (this.isSolved()) {
      return true
    }

    let [x, y] = this.anyEmptyCell()
    var allowedNumbers = this.allowedNumbers(x, y)

    while (allowedNumbers.length > 0) {
      let value = allowedNumbers.shift() as number
      this.set(x, y, value)

      try {
        if (this.solveUltimately()) {
          return true
        }
      } catch (err) {
        //
      }

      this.set(x, y, 0)
    }

    return false
  }
}