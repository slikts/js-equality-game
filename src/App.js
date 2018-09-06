import * as React from "react"
import "./App.css"
import { Provider, Consumer, values } from "./data"

const CellContent = ({ toggled }) => (
  <div className={`CellContent CellContent-on-${toggled}`}>
    &nbsp;
    <div className="container" />
  </div>
)

const CellControl = ({ x, y }) => (
  <Consumer>
    {({ actions: { toggle } }) => (
      <button
        className="CellControl"
        onClick={() => {
          toggle(x, y)
        }}
      />
    )}
  </Consumer>
)

// const log = (a, b) =>
/* eslint-disable eqeqeq */
const GridRow = ({ cells, y }) => (
  <tr>
    <th>
      <div>{values[y].name}</div>
    </th>
    {cells.map(({ a, b, toggled }, x) => (
      <td key={`${x}-${y}`}>
        <div className={`Cell Cell-loose-${a.value == b.value} Cell-strict-${a.value === b.value}`}>
          <CellContent toggled={toggled} />
          <CellControl x={x} y={y} />
        </div>
      </td>
    ))}
  </tr>
)

const Grid = () => (
  <table className="Grid">
    <thead>
      <tr>
        <th />
        {values.map(({ name }) => (
          <th key={name}>
            <div>{name}</div>
          </th>
        ))}
      </tr>
    </thead>
    <Consumer>
      {({ grid }) => (
        <tbody>
          {grid.map((row, y) => (
            <GridRow key={y} cells={row} y={y} />
          ))}
        </tbody>
      )}
    </Consumer>
  </table>
)

const Results = () => (
  <Consumer>
    {({ actions: { showResults, reset } }) => (
      <div className="Results">
        <h1>JS Equality Table Game</h1>
        <p>Lorem ipsum dolor sit amet pipsum.</p>
        <button onClick={() => showResults()}>Show Results</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    )}
  </Consumer>
)

const App = () => (
  <Provider>
    <Consumer>
      {({ resultsVisible }) => (
        <div className={`App App-results-${resultsVisible}`}>
          <Grid resultsVisible={resultsVisible} />
          <Results />
        </div>
      )}
    </Consumer>
  </Provider>
)

export default App
