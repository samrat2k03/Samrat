import React from "react"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import ResumePage from "./Pages/ResumePage"
import Portfolio from "./Portfolio"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Portfolio />}/>
          <Route path="/samrat-resume" element={<ResumePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
