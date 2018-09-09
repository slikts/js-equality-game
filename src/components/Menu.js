import * as React from "react"
import { Consumer } from "../data"

const Menu = () => (
  <Consumer>
    {({ actions: { reset } }) => (
      <ol className="App-menu">
        <li>
          <a onClick={reset} href="#">
            <span>R</span>
            eset
          </a>
        </li>
        <li>
          <a
            href="http://github.com/slikts/js-equality-game#readme"
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
