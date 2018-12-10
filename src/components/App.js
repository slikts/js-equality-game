import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/App.css"
import * as emojiSupport from "detect-emoji-support"
import { Provider, Consumer } from "../data"
import Grid from "./Grid"
import Sidebar from "./Sidebar"

const App = () => (
  <Provider>
    <Consumer>
      {({ resultsVisible }) => (
        <div className="App-wrapper">
          <div
            className={`App App-results-${resultsVisible} App-emoji-${emojiSupport()}`}
          >
            <h1 className="App-title">
              {i18n`How well do you know`} <code>==</code>
              {` `}
              {i18n`in JavaScript?`}
            </h1>
            <div className="App-contents">
              <Grid resultsVisible={resultsVisible} />
              <Sidebar />
            </div>
          </div>
          <footer className="App-credit">
            {i18n`made by`}
            {` `}
            <a
              href="http://untu.ms/"
              rel="noopener noreferrer"
              target="_blank"
            >
              slikts
            </a>
            &nbsp;&nbsp;&bull;&nbsp; {i18n`contribute a`}&nbsp;
            <a href="https://github.com/slikts/js-equality-game#adding-a-translation">
              {i18n`translation`}
            </a>
          </footer>
        </div>
      )}
    </Consumer>
  </Provider>
)

export default App
