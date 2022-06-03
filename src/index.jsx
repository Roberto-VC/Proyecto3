import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "./Components/App"
import Shuffle from "./Components/stateComponents/shuffle"
import Calculator from "./Components/stateComponents/Calculator"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/"  element={<App />} />
        <Route exact path="/React" element={<Shuffle />} />
        <Route exact path="/Calculator" element={<Calculator />} />
      </Routes>
    </Router>
    ,
  </React.StrictMode>
)
