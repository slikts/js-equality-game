import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

const render = () =>
  void ReactDOM.render(<App />, document.querySelector(`#root`))

export default render
