import * as React from "react"
import "../css/Results.css"
import { Consumer } from "../data"

const Results = () => (
  <Consumer>
    {({ actions: { showResults, reset } }) => (
      <div className="Results">
        <h1>JS Equality Table Game</h1>
        <p>Lorem ipsum dolor sit amet pipsum.</p>
        <button onClick={() => showResults()}>Show Results</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    )}
  </Consumer>
)

export default Results
