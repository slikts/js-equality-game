import * as React from "react"
import "../css/Sidebar.css"
import Results from "./Results"
import Menu from "./Menu"
import Score from "./Score"
import { Consumer, total } from "../data"

const Sidebar = () => (
  <Consumer>
    {({ hits, flags, resultsVisible }) => (
      <div className="Sidebar">
        <Menu />
        <div className="Sidebar-group Sidebar-about">
          <label>About</label>
          <p>
            How well do you know the <code>==</code> operator in JavaScript? Test your mettle
            against a textbook example of a confusing language design&nbsp;flaw.
          </p>
          <p>
            Mark all cells where the values are loosely equal according to <code>==</code>. The
            cells that are strictly equal or identical are already&nbsp;revealed.
          </p>
          <p>The table is diagonally symmetrical, so only one side needs to be&nbsp;marked.</p>
          <p>Wrong guesses count against the final&nbsp;score.</p>
        </div>
        <div className="Sidebar-group Sidebar-score">
          <label>Score</label>
          <div className="Sidebar-group-container">
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
