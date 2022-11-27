import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

import StudentList from "./pages/StudentList"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/pasa-lista' element={<StudentList />} />
        <Route path='/pasa-lista/:id' element={<StudentList />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <StudentList />
    // </div>
  )
}

export default App
