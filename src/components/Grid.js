import "../css/Grid.css"
import * as React from "react"
import { Consumer, values } from "../data"
import GridRow from "./GridRow"

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

export default Grid
