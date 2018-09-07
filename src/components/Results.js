import * as React from "react"
import "../css/Results.css"
import { Consumer, total } from "../data"
import Score from "./Score"

const Results = () => (
  <Consumer>
    {({ actions: { showResults, reset }, hits, flags, resultsVisible }) => (
      <div className="Results">
        <ol className="App-menu">
          <li>
            <a onClick={reset} href="#">
              <span>R</span>
              eset
            </a>
          </li>
          <li>
            <a
              href="http://github.com/slikts/js-equality-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>S</span>
              ource
            </a>
          </li>
        </ol>
        <p>Test your mettle against JavaScript weak typing.</p>
        <button onClick={() => showResults()}>Show Results</button>
        <div className="Results-score">
          <div className="Results-flags" title="Flags">
            <Score text={String(flags)} />
          </div>
          <div className="Results-hits" title="Hits">
            <Score text={resultsVisible ? hits : ``} />
          </div>
          <div className="Results-misses" title="Misses">
            <Score text={resultsVisible ? total - hits : ``} />
          </div>
        </div>
        <div className="Results-face" />
      </div>
    )}
  </Consumer>
)

export default Results
