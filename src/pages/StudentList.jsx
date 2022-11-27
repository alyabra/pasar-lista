import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import StudentComponent from "../components/StudentComponent"
import { getAlumnos, getClases } from "../helpers/databases.js"
import ClassInfo from "../components/ClassInfo"
import ModalNewStudent from "../components/ModalNewStudent"
import Header from "../components/Header"
import { getLocalStorage, saveLocalStorage, saveNewStudentLocalStorage, deleteStudent } from "../helpers/useLocalStorage"


function StudentList() {
  const [newStudent, setNewStudent] = useState({})
  const [clase, setClase] = useState({})
  const [error, setError] = useState(false)
  const [editionMode, setEditionMode] = useState(false)

  const params = useParams()

  console.log("params", params)
  useEffect(() => {
    try {
      setClase(getLocalStorage()[params.id-1])
    } catch (error) {
      setError(true)
      console.log("si hubo un error")
    }
  }, [])
  // name: "Temas Selecto de Física I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 7, alumnos
  // console.log("estos son la clase")
  const  {alumnos, name, semester, year, grup } = clase
  // console.log(alumnos, name, semester, year, grup)

  const handleNewStudent = (newStudent) => {
    const nombreCompleto = `${newStudent.name} ${newStudent.apeido}`
    if(newStudent.name != '') {
      console.log("agregado", nombreCompleto)
    saveNewStudentLocalStorage({name: nombreCompleto}, params.id)
    }
    setNewStudent('')
  }
  const handleClickEdith = () => {
    setEditionMode(!editionMode)
  }

  const handleDeleteStudent = id => {
    const classUpdate = {...clase}
    classUpdate.alumnos = clase.alumnos.filter(alumno => alumno.id != id)
    setClase(classUpdate)
    // saveLocalStorage(classUpdate, params.id)
    deleteStudent(classUpdate, params.id)
}
  
  console.log(alumnos)
  return (
    !alumnos ? <h2>Error 404</h2> :
    <div className="flex flex-col p-5">
        <Header />
        <ClassInfo datos={{name, semester, grup, year}} />
        {alumnos?.map((alumno) => (
          <StudentComponent alumno={alumno} key={alumno.id} editionMode={editionMode} handleDeleteStudent={handleDeleteStudent}/>
        ))}
        <div className="relative flex justify-center items-center gap-4">
          <button 
          className={`${!editionMode ? 'bg-cyan-300' : 'bg-gray-600 text-white'} w-1/4 h-10 rounded-md shadow-md`}

            onClick={handleClickEdith}
          >
            {!editionMode ? 'Editar lista' : 'Cancelar edición' }
          </button>
          {editionMode && 
          <>
            <ModalNewStudent handleNewStudent={handleNewStudent} setNewStudent={setNewStudent}/>
            {/* <button>
                Guardar cambios
            </button> */}
   
          </>}
        </div>
    </div>
  )
}

export default StudentList