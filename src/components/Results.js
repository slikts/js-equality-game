import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/Results.css"
import { Consumer, total } from "../data"
import Emoji from "./Emoji"

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
          label = `${wrong}% wrong`
          if (wrong === 100) {
            face = `😒`
          } else if (wrong > 100) {
            face = `💩`
          }
          title = `((${flags} - ${hits} + ${total -
            hits}) / ${total}) * 100 = ${wrong}% wrong`
        } else {
          label = `${100 - wrong}% correct`
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
            hits}) / ${total}) * 100 = ${100 - wrong}% correct`
        }
      }
      return (
        <div className="Results">
          <div className="Results-face" title={title}>
            <Emoji symbol={face} />
            {label}
          </div>
          <div className="Results-controls">
            <button
              onClick={() => showResults()}
              disabled={resultsVisible}
            >
              {i18n`Show Results`}
            </button>
          </div>
        </div>
      )
    }}
  </Consumer>
)

export default Results
