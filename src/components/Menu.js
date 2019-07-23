import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/Menu.css"
import { Consumer } from "../data"

const label = ([x, ...xs]) => (
  <span>
    <span>{x}</span>
    {xs}
  </span>
)

const Menu = () => (
  <Consumer select={({ actions }) => actions}>
    {({ reset }) => (
      <ol className="Menu">
        <li>
          <button onClick={reset}>
            {label(i18n`Restart`)}
          </button>
        </li>
        <li>
          <a
            href="http://github.com/slikts/js-equality-game#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label(i18n`Help`)}
          </a>
        </li>
      </ol>
    )}
  </Consumer>
)

export default Menu
