import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ClassPreview from "../components/ClassPreview"
import ModalNewClass from "../components/ModalNewClass"
import { getClases } from "../helpers/databases"
import { getLocalStorage, saveLocalStorage, deleteClase, creaFakeData } from "../helpers/useLocalStorage"
const Home = () => {
    const [clases, setClases] = useState([])
    useEffect(() => {
        // creaFakeData()
        // saveLocalStorage()
        // deleteClase()
        setClases(getLocalStorage())
        // setClases(getClases())
    },[])
    // const clases = getClases()
    // const {id} = clases
    // console.log(clases)

    const handleNewClass = (newClass) => {
        const classUpdate = [...clases]
        const id = classUpdate[classUpdate.length-1].id + 1
        newClass.id= id
        newClass.alumnos = []
        console.log(newClass)
        classUpdate.push(newClass)
        setClases(classUpdate)
        saveLocalStorage(newClass)
      }
  return (
    <div className="flex flex-col p-5">
        <header>
            <h1 className="text-2xl text-gray-600">Lista de clases</h1>
            <h2>Escuela</h2>
            <button>Agregar escuela</button>
        </header>
        {clases.map(clase => (
            <Link
            to={`/pasa-lista/${clase.id}`}
            key={clase.id}
            >
                <ClassPreview key={clase.id} claseInfo={clase}/>
            </Link>
        ))}
        <div>
        <ModalNewClass handleNewClass={handleNewClass}/>
        </div>

    </div>
  )
}

export default Home