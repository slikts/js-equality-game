import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/Menu.css"
import { Consumer } from "../data"

const Menu = () => (
  <Consumer>
    {({ actions: { reset } }) => (
      <ol className="Menu">
        <li>
          <button onClick={reset}>{i18n`Restart`}</button>
        </li>
        <li>
          <a
            href="http://github.com/slikts/js-equality-game#about-"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i18n`Help`}
          </a>
        </li>
      </ol>
    )}
  </Consumer>
)

export default Menu
