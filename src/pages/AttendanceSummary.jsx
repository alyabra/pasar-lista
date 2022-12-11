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
          <div className="flex gap-x-1">
          <p className="w-1/4">Mes</p>
              {
                clase.attendanceDays?.map(day => (
                    <p className="bg-white w-5 text-center" key={day}>{day.split('/')[1]}</p>
                ))
              }
          </div>
          <div className="flex gap-x-1">
            <p className="w-1/4">Dia</p>
            {
              clase.attendanceDays?.map(day => (
                  <p className="bg-white w-5 text-center" key={day}>{day.split('/')[0]}</p>
              ))
            }
            <p>T</p>
          </div>
            {clase.alumnos?.map((student, index) => (
                <div className="flex flex-row bg-slate-400 gap-x-1" key={student.id}>
                    <p className="w-1/4">{`${index+1}.- ${student.firstName} ${student.lastName}`}</p>
                    {student.attendance.map(day => (
                    <p className="bg-white w-5 text-center" key={day.day}>{day.status === 'present' ? 'p' : day.status==='ausent' ? 'a' : 'r'}</p> 
                    ))}
                    <p>{student.attendance.reduce((total,current) => {
                      let value = 0
                      console.log(current.status)
                      if(current.status === 'present') value = 1
                      return total+value
                    }, 0
                    )}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default AttendanceSummary