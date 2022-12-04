import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getDate } from '../helpers/databases'
import ClassInfo from "../components/ClassInfo"
import ModalNewStudent from "../components/ModalNewStudent"
import Header from "../components/Header"
import { getLocalStorage, saveNewStudentLocalStorage, deleteStudent, saveAttendanceDay } from "../helpers/useLocalStorage"
import ContainerList from "../components/ContainerList"


function StudentList() {
  const [clase, setClase] = useState({})
  const [error, setError] = useState(false)
  const [editionMode, setEditionMode] = useState(false)

  const params = useParams()

  useEffect(() => {
    try {
      const classes = getLocalStorage()
      const indexClass = classes.findIndex(clases => clases.id == params.id)
      setClase(getLocalStorage()[indexClass])
    } catch (error) {
      setError(true)
      console.log("si hubo un error")
    }
  }, [])
  // name: "Temas Selecto de Física I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 7, alumnos
  const  {alumnos, name, semester, year, grup } = clase

  const handleClickEdith = () => {
    setEditionMode(!editionMode)
  }

  const handleDeleteStudent = id => {
    const classUpdate = {...clase}
    classUpdate.alumnos = clase.alumnos.filter(alumno => alumno.id != id)
    setClase(classUpdate)
    deleteStudent(classUpdate, params.id)
  }
  const handleNewStudent = (newStudent, idClass) => {

    const classes = getLocalStorage()
    const indexClass = classes.findIndex(clases => clases.id == params.id)
    
    saveNewStudentLocalStorage(newStudent, idClass)
    setClase(getLocalStorage()[indexClass])
    
  }
  const saveRollCall = (idClass) => {
    const day = getDate()
    saveAttendanceDay(idClass, day)
    console.log(day, idClass, clase)
  }

  
  return (
    !alumnos ? <h2>Error 404</h2> :
    <div className="flex flex-col p-2">
        <Header />
        <ClassInfo datos={{name, semester, grup, year}} />
        <ContainerList alumnos={alumnos} editionMode={editionMode} idClase={params.id} handleDeleteStudent={handleDeleteStudent}/>

        <div className="relative flex justify-center items-center gap-4">
          <button 
          className={`${!editionMode ? 'bg-cyan-300' : 'bg-gray-600 text-white'} w-1/4 h-10 rounded-md shadow-md`}

            onClick={handleClickEdith}
          >
            {!editionMode ? 'Editar lista' : 'Cancelar edición' }
          </button>
          
          {!editionMode && <button
            className="bg-green-300 w-1/4 h-10 rounded-md shadow-md font-bold"
            onClick={() => saveRollCall(params.id)}
          >
                Guardar cambios
          </button> }

          {editionMode && 
            <ModalNewStudent params={params} setEditionMode={setEditionMode} handleNewStudent={handleNewStudent} setClase={setClase} clase={clase}/>
          }
        </div>
    </div>
  )
}

export default StudentList