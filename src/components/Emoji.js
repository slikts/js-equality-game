import * as React from "react"
import * as emojiSupport from "detect-emoji-support"
import "../css/Emoji.css"

const preload = new Set()
const emojis = emojiSupport()

const Emoji = ({ symbol, label }) => {
  const path = `./emojis/${symbol.codePointAt(0).toString(16)}.svg`
  if (emojis && !preload.has(path)) {
    const image = new Image()
    image.src = path
    preload.add(path)
  }
  return (
    <span
      className={`Emoji Emoji-${label}`}
      style={{
        backgroundImage: `url(${path})`,
      }}
      alt={symbol}
    >
      <span className="Emoji-symbol">{symbol}</span>
    </span>
  )
}
export default Emoji
