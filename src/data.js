import createContext from "immer-wieder"
import { i18nConfig } from "es2015-i18n-tag"
import translationData from "./translationData"

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
].map(name => ({
  name,
  value: () => new Function(`return ${name}`)(),
}))

const grid = values.map(a =>
  values.map(b => ({
    a,
    b,
    loose: a.value() == b.value(),
    strict: a.value() === b.value(),
    toggled: false,
  })),
)
export const total =
  []
    .concat(...grid)
    .filter(({ strict, loose }) => loose && !strict).length / 2

const langHash = window.location.hash.slice(1)
const locale =
  (langHash &&
    [...translationData.keys()].find(x =>
      x.startsWith(langHash),
    )) ||
  `en-US`
i18nConfig({
  locales: locale,
  translations: translationData.get(locale),
})

const init = draft =>
  void Object.assign(draft, {
    grid,
    resultsVisible: false,
    misses: 0,
    hits: 0,
    flags: 0,
    locale,
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
      updateLocale: async e => {
        const locales = e.target.value
        const translations =
          (await translationData.get(locales)) || []
        i18nConfig({
          locales,
          translations,
        })
        setState(state => {
          state.locale = locales
        })
        const [shortLocale] = locales.split(`-`)
        window.location.hash = shortLocale
      },
    },
  }),
)
