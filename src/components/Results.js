import * as React from "react"
import "../css/Results.css"
import { Consumer, total } from "../data"

const Results = () => (
  <Consumer>
    {({ actions: { showResults }, hits, flags, resultsVisible }) => {
      const wrong = Math.round(((total - hits + flags - hits) / total) * 100)
      let msg
      let face = `🙃`
      if (!resultsVisible) {
        msg = `🤔 Pending…`
      } else if (wrong >= 100) {
        if (wrong === 100) {
          face = `😒`
        } else if (wrong > 100) {
          face = `💩`
        }
        msg = `${face} ${wrong}% wrong`
      } else {
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
        msg = `${face} ${100 - wrong}% correct`
      }
      return (
        <div className="Results">
          <div className="Results-face">{msg}</div>
          <div className="Results-controls">
            <button onClick={() => showResults()} disabled={resultsVisible}>
              Show Results
            </button>
          </div>
        </div>
      )
    }}
  </Consumer>
)

export default Results
