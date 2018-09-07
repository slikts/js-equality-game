import * as React from "react"
import "../css/Results.css"
import { Consumer, total } from "../data"
import Score from "./Score"

const Results = () => (
  <Consumer>
    {({ actions: { showResults, reset }, hits, misses, flags, resultsVisible }) => (
      <div className="Results">
        {/* <h1>JS Equality Table Game</h1> */}
        <p>Lorem ipsum dolor sit amet pipsum.</p>
        <button onClick={() => showResults()}>Show Results</button>
        <button onClick={() => reset()}>Reset</button>
        <div className="Results-score">
          <div className="Results-flags">
            <label>Flags</label>
            <Score text={String(flags)} />
          </div>
          <div className="Results-hits">
            <label>Hits</label>
            <Score text={resultsVisible ? hits : ``} />
          </div>
          <div className="Results-misses">
            <label>Misses</label>
            <Score text={resultsVisible ? total - hits : ``} />
          </div>
        </div>
      </div>
    )}
  </Consumer>
)

export default Results
