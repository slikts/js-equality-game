import * as React from "react"
import "../css/Cell.css"
import { Consumer } from "../data"

export const CellContent = ({ toggled }) => (
  <div className={`CellContent CellContent-on-${toggled}`}>
    &nbsp;
    <div className="container" />
  </div>
)

export const CellControl = ({ x, y }) => (
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
