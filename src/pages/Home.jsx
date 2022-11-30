import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ClassPreview from "../components/ClassPreview"
import ModalNewClass from "../components/ModalNewClass"
import { getLocalStorage, saveLocalStorage, deleteClase, creaFakeData } from "../helpers/useLocalStorage"
const Home = () => {
    const [clases, setClases] = useState([])
    const [editionMode, setEditionMode] = useState(false)
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
        // console.log(newClass)
        classUpdate.push(newClass)
        setClases(classUpdate)
        saveLocalStorage(newClass)
    }
    const handleDeleteClass = (idClase) => {
        deleteClase(idClase)
        setClases(getLocalStorage())
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
            to={!editionMode && `/pasa-lista/${clase.id}`}
            key={clase.id}
            >
                <ClassPreview key={clase.id} claseInfo={clase} handleDeleteClass={handleDeleteClass} editionMode={editionMode}/>
            </Link>
        ))}
        <div className="flex justify-center gap-24">
        <button
        className="rounded-md w-32 h-20 bg-cyan-300   px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        onClick={() => setEditionMode(!editionMode)}
        >Editar lista de clases</button>
        { editionMode && <ModalNewClass handleNewClass={handleNewClass}/>

        }
        </div>

    </div>
  )
}

export default Home