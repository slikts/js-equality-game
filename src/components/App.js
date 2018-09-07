import * as React from "react"
import "../css/App.css"
import { Provider, Consumer } from "../data"
import Grid from "./Grid"
import Results from "./Results"

const App = () => (
  <Provider>
    <Consumer>
      {({ resultsVisible }) => (
        <div className={`App App-results-${resultsVisible}`}>
          <h1 className="App-title">JavaScript Equality Table Game</h1>
          <div className="App-contents">
            <Grid resultsVisible={resultsVisible} />
            <Results />
          </div>
        </div>
      )}
    </Consumer>
  </Provider>
)

export default App
