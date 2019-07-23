import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from "./data"

const render = () =>
  void ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    document.querySelector(`#root`),
  )

export default render
