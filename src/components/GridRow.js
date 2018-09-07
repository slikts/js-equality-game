import * as React from "react"
import { values } from "../data"
import { CellContent, CellControl } from "./Cell"

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

export default GridRow
