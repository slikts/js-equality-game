import * as React from "react"
import { values } from "../data"
import { CellContent, CellControl } from "./Cell"

const GridRow = ({ cells, y }) => (
  <tr>
    <th>
      <div>{values[y].name}</div>
    </th>
    {cells.map(({ a, b, loose, strict, toggled }, x) => (
      <td key={`${x}-${y}`}>
        <div className={`Cell Cell-loose-${loose} Cell-strict-${strict}`}>
          <CellContent toggled={toggled} />
          <CellControl x={x} y={y} />
          <div className="Cell-tooltip">{`${a.name} ==${strict ? `=` : ``} ${b.name}`}</div>
        </div>
      </td>
    ))}
  </tr>
)

export default GridRow
