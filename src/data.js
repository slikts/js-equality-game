import createContext from "immer-wieder"

/* eslint-disable no-new-func */
export const values = [
  `true`,
  `false`,
  `1`,
  `0`,
  `-1`,
  `"true"`,
  `"false"`,
  `"1"`,
  `"0"`,
  `"-1"`,
  `""`,
  `null`,
  `undefined`,
  `Infinity`,
  `-Infinity`,
  `[]`,
  `{}`,
  `[[]]`,
  `[0]`,
  `[1]`,
  `NaN`,
].map(name => ({ name, value: new Function(`return ${name}`)() }))

const GridState = () => values.map(a => values.map(b => ({ a, b, toggled: false })))

export const { Provider, Consumer } = createContext(setState => ({
  resultsVisible: false,
  grid: GridState(),
  actions: {
    showResults: () =>
      void setState(state => {
        state.resultsVisible = !state.resultsVisible
      }),
    toggle: (x, y) =>
      void setState(draft => {
        if (draft.resultsVisible) {
          return
        }
        draft.grid[y][x].toggled = !draft.grid[y][x].toggled
        if (x !== y) {
          draft.grid[x][y].toggled = !draft.grid[x][y].toggled
        }
      }),
    reset: () =>
      void setState(draft => {
        // TODO DRY
        draft.grid = GridState()
        draft.resultsVisible = false
      }),
  },
}))
