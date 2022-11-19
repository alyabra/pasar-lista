import ClassPreview from "../components/ClassPreview"
import { getClases } from "../helpers/databases"

const Home = () => {
    const clases = getClases()
    // const {id} = clases
    console.log(clases)
  return (
    <div className="flex flex-col p-5">
        <header>
            <h1>Lista de clases</h1>
            <h2>Escuela</h2>
            <button>Agregar escuela</button>
        </header>
        {clases.map(clase => (
            <ClassPreview key={clase.id} claseInfo={clase}/>
        ))}
        <div>
            <button className="bg-cyan-300 w-22 p-5 rounded-md flex justify-center items-center text-xl font-bold"><span className="text-white text-4xl pr-2">+</span>Agregar clase</button>
        </div>
    </div>
  )
}

export default Home