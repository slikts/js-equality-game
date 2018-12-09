import * as React from "react"
import "../css/Sidebar.css"
import Results from "./Results"
import Menu from "./Menu"
import Score from "./Score"
import { Consumer, total } from "../data"
import Emoji from "./Emoji"

const Sidebar = () => (
  <Consumer>
    {({ hits, flags, resultsVisible }) => (
      <div className="Sidebar">
        <Menu />
        <div className="Sidebar-group Sidebar-about">
          <label>About</label>
          <p>
            Test your mettle against what's considered a
            textbook example of a confusing language design flaw
            – JavaScript's loose equality operator.
          </p>
          <p>
            Flag all cells where the values are loosely equal
            according to <code>==</code>. The cells that are
            strictly equal are already revealed.
          </p>
          <p>
            The table is diagonally symmetrical, so only one
            side needs to be flagged.
          </p>
          <p>Wrong guesses count against the final score.</p>
          {/* <p className="Sidebar-math">
            wrongness =&nbsp;
            <span>
              <span>flags - hits + misses</span>
              {` `}
              <span>max hits</span>
            </span>
          </p> */}
        </div>
        <div className="Sidebar-group Sidebar-score">
          <label>Score</label>
          <div className="Sidebar-group-container">
            <div
              className="Results-wrapper Results-flags"
              title="Flags"
            >
              <Emoji symbol="🚩" />
              <Score text={String(flags)} />
            </div>
            <div
              className="Results-wrapper Results-hits"
              title="Hits"
            >
              <Emoji symbol="✔️" label="hit" />
              <Score text={resultsVisible ? hits : ``} />
            </div>
            <div
              className="Results-wrapper Results-misses"
              title="Misses"
            >
              <Emoji symbol="❌" />
              <Score
                text={resultsVisible ? total - hits : ``}
              />
            </div>
          </div>
        </div>
        <div className="Sidebar-group Sidebar-results">
          <label>Results</label>
          <Results />
        </div>
      </div>
    )}
  </Consumer>
)

export default Sidebar
