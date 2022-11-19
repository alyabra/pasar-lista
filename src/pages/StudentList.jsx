import StudentComponent from "../components/StudentComponent"
import { getAlumnos } from "../helpers/databases.js"
import ClassInfo from "../components/ClassInfo"

function StudentList() {
  const clase = getAlumnos()
  console.log(clase)
  const  {alumnos, materia, semestre, year, grupo } = clase
  // console.log(alumnos)
  return (
    <div className="flex flex-col p-5">
        <ClassInfo datos={{materia, semestre, grupo, year}} />
        {alumnos.map((alumno, index) => (
          <StudentComponent alumno={alumno} key={index}/>
        ))}
    </div>
  )
}

export default StudentList