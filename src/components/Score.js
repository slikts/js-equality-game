import * as React from "react"
import "../css/Score.css"

const Letters = ({ text, name }) => (
  <span className={`Letters Letters-${name}`}>
    {[...text].map((x, i) => (
      <span key={i} className="Letters-letter">
        {x}
      </span>
    ))}
  </span>
)

const Score = ({ text }) => (
  <div className="Score">
    <Letters
      text={``.padStart(3 - String(text).length, `0`)}
      name="a"
    />
    <Letters text={String(text)} name="b" />
  </div>
)

export default Score
