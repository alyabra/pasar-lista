import StudentComponent from "./StudentComponent"
function ContainerList({alumnos, editionMode, handleDeleteStudent, idClase}) {
  return (
    <div className=" mx-auto w-full md:w-3/4 xl:w-1/2">
        {alumnos?.map((alumno) => (
          <StudentComponent alumno={alumno} key={alumno.id} editionMode={editionMode} handleDeleteStudent={handleDeleteStudent} idClase={idClase} />
        ))}
    </div>
  )
}

export default ContainerList