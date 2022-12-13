import { BrowserRouter, Routes, Route } from "react-router-dom"
import AttendanceSummary from "./pages/AttendanceSummary"
import Home from "./pages/Home"

import StudentList from "./pages/StudentList"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pasar-lista" element={<Home />}/>
        <Route path='/pasa-lista' element={<StudentList />} />
        <Route path='/pasa-lista/:id' element={<StudentList />} />
        <Route path="/resumen-asistencia/:id" element={<AttendanceSummary />}/>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <StudentList />
    // </div>
  )
}

export default App
