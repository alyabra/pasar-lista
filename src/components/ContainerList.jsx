import ChangeOrden from "./ChangeOrden"
import StudentComponent from "./StudentComponent"
function ContainerList({ editionMode, handleDeleteStudent, idClase, studensOrderly, orderBy, handleChangeOrder, children}) {
  
  return (
    <div className=" w-full mx-auto max-w-4xl">
        {children}
        <ChangeOrden handleChangeOrder={handleChangeOrder} orderBy={orderBy} />
        {studensOrderly?.map((alumno) => (
          <StudentComponent alumno={alumno} key={alumno.id} editionMode={editionMode} handleDeleteStudent={handleDeleteStudent} idClase={idClase} orderBy={orderBy}/>
        ))}
    </div>
  )
}

export default ContainerList