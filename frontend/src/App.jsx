import { useState } from 'react'
import "./style.css"
import { LoanForm } from './components/LoanForm'
import { Decision } from './components/Decision'

function App() {

  return (
    <div style={{ backgroundColor: "#2b3053ff", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <section style={{ textAlign: "center", paddingTop: "20px" }} >
        <h1 style={{ fontSize: 30, color: "#A6B1E1" }}>Loan Decision Engine</h1>
      </section>
      <section style={{ display: "flex", gap: "40px", flexDirection: "column", alignItems: "center", justifyItems: "center" }}>
        <LoanForm />
      </section>
    </div>
  )
}

export default App
