import createContext from "immer-wieder"

/* eslint-disable no-new-func, eqeqeq */
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

const grid = values.map(a =>
  values.map(b => ({
    a,
    b,
    loose: a.value == b.value,
    strict: a.value === b.value,
    toggled: false,
  })),
)
export const total = []
  .concat(...grid)
  .map(({ loose }) => loose)
  .filter(x => x).length

const init = draft =>
  void Object.assign(draft, {
    grid,
    resultsVisible: false,
    misses: 0,
    hits: 0,
    flags: 0,
  })

const applyInit = o => {
  init(o)
  return o
}

export const { Provider, Consumer } = createContext(setState =>
  applyInit({
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
          const { loose, toggled } = draft.grid[x][y]
          draft.grid[y][x].toggled = !toggled
          if (x !== y) {
            draft.grid[x][y].toggled = !toggled
          }
          draft.flags += !toggled ? 1 : -1
          if (loose) {
            draft.hits += !toggled ? 1 : -1
          } else {
            draft.misses += !toggled ? 1 : -1
          }
        }),
      reset: e => {
        e.preventDefault()
        setState(init)
      },
    },
  }),
)
