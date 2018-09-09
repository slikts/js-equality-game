import "../css/Grid.css"
import * as React from "react"
import { Consumer, values } from "../data"
import GridRow from "./GridRow"

const move = e => {
  const grid = e.target.closest(`.Grid-wrapper`)
  const rulerX = grid.querySelector(`.Grid-ruler-x`)
  const rulerY = grid.querySelector(`.Grid-ruler-y`)
  const gridRect = grid.getBoundingClientRect()
  const cellRect = grid.querySelector(`.CellContent`).getBoundingClientRect()

  if (
    e.clientX - gridRect.left <= cellRect.left - gridRect.left ||
    e.clientY - gridRect.top <= cellRect.top - gridRect.top
  ) {
    rulerX.style.display = `none`
    return
  }
  const x = Math.min(values.length - 1, Math.floor((e.clientX - cellRect.left) / cellRect.width))
  const width = x * cellRect.width + 100
  const y = Math.min(values.length - 1, Math.floor((e.clientY - cellRect.top) / cellRect.height))
  const height = y * cellRect.height + cellRect.top - gridRect.top

  rulerX.style.display = `block`
  rulerX.style.width = `${width}px`
  rulerX.style.top = `${height}px`

  rulerY.style.display = `block`
  rulerY.style.left = `${width}px`
  rulerY.style.height = `${height}px`
}

const Grid = () => (
  <div className="Grid-wrapper">
    <table className="Grid" onMouseMove={move}>
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
          <tbody
            onMouseOut={({ target }) => {
              const table = target.closest(`.Grid-wrapper`)
              table.querySelector(`.Grid-ruler-x`).style.display = `none`
              table.querySelector(`.Grid-ruler-y`).style.display = `none`
            }}
          >
            {grid.map((row, y) => (
              <GridRow key={y} cells={row} y={y} />
            ))}
          </tbody>
        )}
      </Consumer>
      <colgroup>
        <col style={{ width: `100px` }} />
      </colgroup>
    </table>
    <div className="Grid-ruler Grid-ruler-x" />
    <div className="Grid-ruler Grid-ruler-y" />
    <div className="Grid-tooltip" />
  </div>
)

export default Grid
