import React from "react"
import { navigate } from "gatsby"

import Header from "../components/Header"

export default () => (
  <div>
    <Header />
    <button onClick={() => navigate("/")}>Navigate back to HomePage</button>
  </div>
)
