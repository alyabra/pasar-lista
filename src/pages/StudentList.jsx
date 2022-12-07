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
        let ordenados = clase.alumnos

        switch (orderBy) {
          case 'name':
            ordenados = clase.alumnos.sort(sortArrayAbcName)
            setStudensOrderly(ordenados)
            break;
          case 'lastName':
            ordenados = clase.alumnos.sort(sortArrayAbcApeido)
            setStudensOrderly(ordenados)
          case '':
            setStudensOrderly(ordenados)
        }
  }

  
  return (
    !alumnos ? <h2>Error 404</h2> :
    <div className="flex flex-col p-2">
        <Header />
        <select name="ordenar" id="ordenar" value={orderBy}
          onChange={(e) => handleChangeOrder(e.target.value)}
        >
          <option value="">Elegir orden</option>
          <option value="name">Por nombre</option>
          <option value="lastName">Por apeido</option>
        </select>
        {/* <button
        className="bg-red-400"
        onClick={() => handleChangeOrder('name')}
        >Cambiar orden</button> */}
        <ClassInfo datos={{name, semester, grup, year}} />
        <ContainerList alumnos={alumnos} studensOrderly={studensOrderly} orderBy={orderBy} editionMode={editionMode} idClase={params.id} handleDeleteStudent={handleDeleteStudent}/>

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