import * as emojiSupport from "detect-emoji-support"
import render from "./render"
import "./css/index.css"
import "@babel/polyfill"
import "whatwg-fetch"

render()

if (!emojiSupport()) {
  fetch(`./emojis/files.json`)
    .then(response => response.json())
    .then(images =>
      images.forEach(({ sourceName }) => {
        // XXX not sure if this preloading works
        const image = new Image()
        image.src = sourceName
      }),
    )
}
