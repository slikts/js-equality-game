import * as React from "react"
import "../css/App.css"
import * as emojiSupport from "detect-emoji-support"
import { Provider, Consumer } from "../data"
import Grid from "./Grid"
import Sidebar from "./Sidebar"
import { ReactComponent as Icon } from "../icon.svg"

const App = () => (
  <Provider>
    <Consumer>
      {({ resultsVisible }) => (
        <div
          className={`App App-results-${resultsVisible} App-emoji-${emojiSupport()}`}
        >
          <h1 className="App-title">
            <Icon />
            How well do you know <code>==</code> in JavaScript
          </h1>
          <div className="App-contents">
            <Grid resultsVisible={resultsVisible} />
            <Sidebar />
          </div>
        </div>
      )}
    </Consumer>
  </Provider>
)

export default App
