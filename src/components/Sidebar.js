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
          <p>Test your mettle against JavaScript weak&nbsp;typing.</p>
          <p>
            Mark the cells where the values are equal according to the <code>==</code> (loose or
            abstract equality comparison) operator. The cells that are strictly equal are
            already&nbsp;revealed.
          </p>
          <p>Note that the table is diognally symmetrical.</p>
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
