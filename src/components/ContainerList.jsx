import StudentComponent from "./StudentComponent"
function ContainerList({ editionMode, handleDeleteStudent, idClase, studensOrderly, orderBy}) {
  
  return (
    <div className=" mx-auto w-full md:w-3/4 xl:w-1/2">
        {studensOrderly?.map((alumno) => (
          <StudentComponent alumno={alumno} key={alumno.id} editionMode={editionMode} handleDeleteStudent={handleDeleteStudent} idClase={idClase} orderBy={orderBy}/>
        ))}
    </div>
  )
}

export default ContainerList