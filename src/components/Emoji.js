import * as React from "react"
import "../css/Emoji.css"

const Emoji = ({ symbol, label }) => {
  const path = `./emojis/${symbol.codePointAt(0).toString(16)}.svg`
  return (
    <span
      className={`Emoji Emoji-${label}`}
      style={{
        backgroundImage: `url(${path})`,
      }}
    >
      <span className="Emoji-symbol">{symbol}</span>
    </span>
  )
}
export default Emoji
