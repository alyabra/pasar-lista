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
        <div className={`flex flex-col w-full`}>
          {/* <div className="flex">
              {
                clase.attendanceDays?.map(day => (
                    <p className="bg-white w-5 text-center" key={day}>{day.split('/')[1]}</p>
                ))
              }
          </div> */}
          <div className="flex m-auto">
            <div className="min-w-fit ">
              <p className="border border-black">Mes</p>
              <p className="border border-black ">Dia</p>
              {clase.alumnos?.map((student, index) => (
                    <p  key={student.id} className="border border-black px-1 ">{`${index+1}.- ${student.firstName} ${student.lastName}`}</p>
            ))}
            </div>
            <div className="flex flex-col">
              <div className="flex">
              { clase.attendanceDays?.map(day => (
                <p className="w-5 text-center border border-black" key={day}>{day.split('/')[1]}</p>
                ))
              }
              </div>
              <div className="flex">
              {
                clase.attendanceDays?.map(day => (
                    <div className="flex flex-row"
                    key={day}>
                      <div className="flex flex-col ">
                      {/* <p className="bg-white w-5 text-center border border-black" key={day}>{day.split('/')[1]}</p> */}
                        <p className="w-5 text-center border border-black">{day.split('/')[0]}</p>
                        
                        {clase.alumnos?.map(student => {
                          const dataDay = student.attendance.find(date => date.day ===day)
                          // console.log("algo",dataDay)
                          if(dataDay) {
                            return <p className="w-5 border border-black text-center"
                              key={`${day}+${student.id}}`}
                            >{dataDay.status === 'present' ? 'p' : dataDay.status === 'ausent' ? 'a': 'r'}</p>
                          } else {
                            return <p className="w-5  border border-black text-red-900 text-center"
                            key={`${day}+${student.id}`}
                            >{'a'}</p>
                          }
                        })}
                      </div>
                    </div>
                ))
              }
              </div>
            </div>
            <div className="text-center flex flex-col">
              <p className="w-5 border border-black">-</p>
              <p className="w-5 border border-black">A</p>
              {clase.alumnos?.map(student => (
                      <p key={student.id} className="w-5 border border-black">
                        {student.attendance.reduce((accumulator, currentValue) => accumulator + (currentValue.status==='present' ? 1 : 0), 0)
                        }
                      </p>
              ))}
            </div>
            <div className=" text-center  flex flex-col">
            <p className="w-5 border border-black">-</p>
              <p className="w-5 border border-black">R</p>
              {clase.alumnos?.map(student => (
                      <p key={student.id} className="w-5 border border-black">
                        {student.attendance.reduce((accumulator, currentValue) => accumulator + (currentValue.status==='late' ? 1 : 0), 0)
                        }
                      </p>
              ))}
            </div>
            <div className="text-center  flex flex-col">
              <p className="w-5 border border-black">-</p>
              <p className="w-5 border border-black">F</p>
              {clase.alumnos?.map(student => (
                      <p key={student.id} className="w-5 border border-black">
                        {student.attendance.reduce((accumulator, currentValue) => accumulator + (currentValue.status==='ausent' ? 1 : 0), 0)
                        }
                      </p>
              ))}
            </div>
          </div>
          
        </div>
    </>
  )
}

export default AttendanceSummary