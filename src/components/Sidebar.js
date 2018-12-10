import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/Sidebar.css"
import Results from "./Results"
import Menu from "./Menu"
import Score from "./Score"
import { Consumer, total } from "../data"
import Emoji from "./Emoji"
import translationData from "../translationData"

const Sidebar = () => (
  <Consumer>
    {({
      hits,
      flags,
      resultsVisible,
      locale,
      actions: { updateLocale },
    }) => (
      <div className="Sidebar">
        <Menu />

        <div className="Sidebar-group Sidebar-about">
          <label>{i18n`About`}</label>
          <p>
            {i18n`Test your mettle against what's considered a textbook example of a confusing language design flaw – JavaScript's loose equality operator.`}
          </p>
          <p>
            {i18n`Flag all cells where the values are loosely equal according to`}
            <code>==</code>.{` `}
            {i18n`The cells that are strictly equal are already revealed.`}
          </p>
          <p>
            {i18n`The table is diagonally symmetrical, so only one side needs to be flagged.`}
          </p>
          <p>{i18n`Wrong guesses count against the final score:`}</p>
          <p className="Sidebar-math">
            {i18n`wrongness`} =&nbsp;
            <span>
              <span>{i18n`flags - hits + misses`}</span>
              {` `}
              <span>{i18n`max hits`}</span>
            </span>
          </p>
        </div>

        <div className="Sidebar-group Sidebar-language">
          <label>{i18n`Language`}</label>
          <p>
            <select value={locale} onChange={updateLocale}>
              {[...translationData].map(([code, { name }]) => (
                <option value={code} key={code}>
                  {i18n.translate(name)}
                </option>
              ))}
            </select>
          </p>
        </div>

        <div className="Sidebar-group Sidebar-score">
          <label>{i18n`Score`}</label>
          <div className="Sidebar-group-container">
            <div
              className="Results-wrapper Results-flags"
              title={i18n`Flags`}
            >
              <Emoji symbol="🚩" />
              <Score text={String(flags)} />
            </div>
            <div
              className="Results-wrapper Results-hits"
              title={i18n`Hits`}
            >
              <Emoji symbol="✔️" label="hit" />
              <Score text={resultsVisible ? hits : ``} />
            </div>
            <div
              className="Results-wrapper Results-misses"
              title={i18n`Misses`}
            >
              <Emoji symbol="❌" />
              <Score
                text={resultsVisible ? total - hits : ``}
              />
            </div>
          </div>
        </div>
        <div className="Sidebar-group Sidebar-results">
          <label>{i18n`Results`}</label>
          <Results />
        </div>
      </div>
    )}
  </Consumer>
)

export default Sidebar
