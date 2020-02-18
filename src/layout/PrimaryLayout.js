import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

export default ({ children, column }) => (
  <div>
    <SEO />
    <Header />
    <div className="container">
      <div className="row justify-content-md">
        <div className={column}>{children}</div>
      </div>
    </div>
    <Footer />
  </div>
)
