import { useEffect, useState } from "react"
import ClassPreview from "../components/ClassPreview"
import ModalNewClass from "../components/ModalNewClass"
import { getLocalStorage, saveLocalStorage, deleteClase, creaFakeData } from "../helpers/useLocalStorage"
const Home = () => {
    const [clases, setClases] = useState([])
    const [editionMode, setEditionMode] = useState(false)
    useEffect(() => {
        // creaFakeData()
        setClases(getLocalStorage())
    },[])
    const handleNewClass = (newClass) => {
        saveLocalStorage(newClass)
        setClases(getLocalStorage())
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
        {clases?.map(clase => (
                <ClassPreview key={clase.id} claseInfo={clase} handleDeleteClass={handleDeleteClass} editionMode={editionMode}/>
        ))}
        <div className="flex justify-center gap-24">
        <button
        className={`rounded-md w-32 h-20 ${!editionMode ? 'bg-cyan-300' : 'bg-gray-200'}   px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-md`}
        onClick={() => setEditionMode(!editionMode)}
        >{!editionMode ? 'Editar lista de clases' : 'Cancelar'}</button>
        { editionMode && <ModalNewClass handleNewClass={handleNewClass}
        />

        }
        </div>

    </div>
  )
}

export default Home