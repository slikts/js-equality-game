import * as React from "react"
import "../css/Cell.css"
import { Consumer } from "../data"
import Emoji from "./Emoji"

export const CellContent = ({ toggled }) => (
  <div className={`CellContent CellContent-on-${toggled}`}>
    <Emoji label="hit" symbol="✔️" />
    <Emoji label="miss" symbol="❌" />
    <Emoji label="flag" symbol="🚩" />
  </div>
)

export const CellControl = ({ x, y }) => (
  <Consumer>
    {({ actions: { toggle } }) => (
      <button
        className="CellControl"
        onClick={() => void toggle(x, y)}
      />
    )}
  </Consumer>
)
