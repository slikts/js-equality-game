import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/Results.css"
import { Consumer, total } from "../data"
import Emoji from "./Emoji"
import Twitter from "./Twitter"

const Results = () => (
  <Consumer>
    {({
      actions: { showResults },
      hits,
      flags,
      resultsVisible,
    }) => {
      const wrong = Math.round(
        ((total - hits + flags - hits) / total) * 100,
      )
      let face = `🤔`
      let title = ``
      let label = i18n`Pending…`
      if (resultsVisible) {
        if (wrong >= 100) {
          label = `${wrong}% ${i18n`wrong`}`
          if (wrong === 100) {
            face = `😒`
          } else if (wrong > 100) {
            face = `💩`
          }
          title = `((${flags} - ${hits} + ${total -
            hits}) / ${total}) * 100 = ${wrong}% ${i18n`wrong`}`
        } else {
          label = `${100 - wrong}% ${i18n`correct`}`
          if (wrong >= 90) {
            face = `😞`
          } else if (wrong >= 80) {
            face = `😔`
          } else if (wrong >= 70) {
            face = `😐`
          } else if (wrong >= 50) {
            face = `🙄`
          } else if (wrong >= 30) {
            face = `🙂`
          } else if (wrong >= 10) {
            face = `😅`
          } else if (wrong >= 5) {
            face = `😂`
          } else if (wrong === 0) {
            face = `🎉`
          }
          title = `100 - ((${flags} - ${hits} + ${total -
            hits}) / ${total}) * 100 = ${100 -
            wrong}% ${i18n`correct`}`
        }
      }
      const tweet = window.encodeURIComponent(
        i18n`My result in JavaScript Equality Table Game: ${label} ${face} ${`https://eqeq.js.org`}`,
      )
      return (
        <div className="Results">
          <div className="Results-face" title={title}>
            {label}&nbsp;
            <Emoji symbol={face} />
          </div>
          <div className="Results-controls">
            <button
              className="Results-submit"
              onClick={() => showResults()}
              disabled={resultsVisible}
            >
              {i18n`Show Results`}
            </button>
            <Twitter disabled={!resultsVisible} text={tweet} />
          </div>
        </div>
      )
    }}
  </Consumer>
)

export default Results
