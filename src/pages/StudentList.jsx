import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getDate, sortArrayAbcName, sortArrayAbcApeido } from '../helpers/function'
import ClassInfo from "../components/ClassInfo"
import ModalNewStudent from "../components/ModalNewStudent"
import Header from "../components/Header"
import { getLocalStorage, saveNewStudentLocalStorage, deleteStudent, saveAttendanceDay } from "../helpers/useLocalStorage"
import ContainerList from "../components/ContainerList"


function StudentList() {
  const [clase, setClase] = useState({})
  const [studensOrderly, setStudensOrderly] = useState([])
  const [orderBy, setOrderBy] = useState('')
  const [error, setError] = useState(false)
  const [editionMode, setEditionMode] = useState(false)

  const params = useParams()

  useEffect(() => {
    try {
      const classes = getLocalStorage()
      const indexClass = classes.findIndex(clases => clases.id == params.id)
      setClase(classes[indexClass])
      setStudensOrderly(classes[indexClass].alumnos)
    } catch (error) {
      setError(true)
      console.log("si hubo un error")
    }
  }, [])

  const  { alumnos, name, semester, year, grup } = clase

  const handleClickEdith = () => {
    setEditionMode(!editionMode)
  }

  const updateClass = () => {
    const classes = getLocalStorage()
    const indexClass = classes.findIndex(clases => clases.id == params.id)
    setClase(getLocalStorage()[indexClass])
    setStudensOrderly(classes[indexClass].alumnos)
    setOrderBy('')
  }

  const handleDeleteStudent = (id) => {
    deleteStudent(id, params.id)
    updateClass()
  }

  const handleNewStudent = (newStudent, idClass) => {
    saveNewStudentLocalStorage(newStudent, idClass)
    updateClass()
  }
  const saveRollCall = (idClass) => {
    const day = getDate()
    saveAttendanceDay(idClass, day)
  }
  const handleChangeOrder = (orderBy) => {
    setOrderBy(orderBy)
    let ordenados
        switch (orderBy) {
          case 'name':
            // studensOrderly
            ordenados = clase.alumnos.sort(sortArrayAbcName)
            setStudensOrderly(ordenados)
            break;
          case 'lastName':
            ordenados = clase.alumnos.sort(sortArrayAbcApeido)
            setStudensOrderly(ordenados)
            break;
          case '':
            setStudensOrderly(clase.alumnos)
            // console.log("dejo igual")
        }
  }

  
  return (
    <div className="flex flex-col p-2 align-middle justify-center">
        <Header />
        <ContainerList  studensOrderly={studensOrderly} orderBy={orderBy} editionMode={editionMode} idClase={params.id} handleDeleteStudent={handleDeleteStudent} handleChangeOrder={handleChangeOrder}>
          <ClassInfo datos={{name, semester, grup, year}} />
        </ContainerList>

        <div className="relative flex justify-center items-center gap-4">
          <button 
          className={`${!editionMode ? 'bg-cyan-300 hover:bg-cyan-400' : 'bg-gray-600 text-white hover:bg-gray-400'} w-1/4 py-2  rounded-md shadow-md font-bold`}

            onClick={handleClickEdith}
          >
            {!editionMode ? 'Editar lista' : 'Cancelar edición' }
          </button>
          
          {!editionMode && <button
            className="bg-green-300 w-1/4 py-2 rounded-md shadow-md font-bold hover:bg-green-400"
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