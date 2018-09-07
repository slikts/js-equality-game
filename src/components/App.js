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
          <Grid resultsVisible={resultsVisible} />
          <Results />
        </div>
      )}
    </Consumer>
  </Provider>
)

export default App
