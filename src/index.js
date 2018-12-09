import * as emojiSupport from "detect-emoji-support"
import React from "react"
import ReactDOM from "react-dom"
import "./css/index.css"
import App from "./components/App"
import "@babel/polyfill"
import "whatwg-fetch"

ReactDOM.render(<App />, document.getElementById(`root`))

if (!emojiSupport()) {
  fetch(`./emojis/files.json`)
    .then(response => response.json())
    .then(images =>
      images.forEach(({ sourceName }) => {
        const image = new Image()
        image.src = sourceName
      }),
    )
}
