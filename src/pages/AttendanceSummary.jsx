import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getLocalStorage } from "../helpers/useLocalStorage"
import Header from "../components/Header"
const AttendanceSummary = () => {
    const [clase, setClase] = useState({})
    const [error, setError] = useState(false)
    const params = useParams()

    useEffect(() => {
        try {
          const classes = getLocalStorage()
          const indexClass = classes.findIndex(clases => clases.id == params.id)
          setClase(getLocalStorage()[indexClass])
        } catch (error) {
          setError(true)
          console.log("si hubo un error")
        }
      }, [])
  return (
    <>
        <Header />
        <div className={`flex flex-col gap-2 w-full`}>
          <div className="flex">
            <p className="w-1/4">Dias</p>
            {
              clase.attendanceDays?.map(day => (
                <p key={day}>{day}</p>
              ))
            }
          </div>
            {clase.alumnos?.map(student => (
                <div className="flex flex-row bg-slate-400 gap-x-1" key={student.id}>
                    <p className="w-1/4">{student.name}</p>
                    {student.attendance.map(day => (
                    <p className="bg-white w-4 text-center" key={day.day}>{day.status === 'present' ? 'p' : day.status==='ausent' ? 'a' : 'r'}</p> 
                    ))}
                </div>
            ))}
        </div>
    </>
  )
}

export default AttendanceSummary