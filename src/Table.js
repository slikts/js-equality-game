import * as React from "react"
import "./Table.css"

const Cell = ({ value, onClick, key }) => (
  <td key={Math.random()} onClick={onClick}>
    {value}
  </td>
)

export const Row = () => {}

export const Table = ({ grid, values }) => (
  <table className="Table">
    <tbody>
      <tr>
        <th />
        {values.map(({ name }) => (
          <th key={Math.random()}>
            <div>{String(name)}</div>
          </th>
        ))}
      </tr>
      {grid.map((row, i) => (
        <tr key={Math.random()}>
          <th>{String(values[i].name)}</th>
          {row.map(cell => (
            <Cell key={Math.random()} value={`🚩`} onClick={() => void console.log(123)} />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)
