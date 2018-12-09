import * as React from "react"
import "../css/Menu.css"
import { Consumer } from "../data"

const Menu = () => (
  <Consumer>
    {({ actions: { reset } }) => (
      <ol className="Menu">
        <li>
          <button onClick={reset}>
            <span>R</span>
            eset
          </button>
        </li>
        <li>
          <a
            href="http://github.com/slikts/js-equality-game#about-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>H</span>
            elp
          </a>
        </li>
      </ol>
    )}
  </Consumer>
)

export default Menu
