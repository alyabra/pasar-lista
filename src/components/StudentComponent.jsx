import React, { useEffect, useState } from 'react'
import { getDate } from '../helpers/databases'
import { saveAttendanceLocalStorage } from '../helpers/useLocalStorage'

const StudentComponent = ({alumno, editionMode, handleDeleteStudent, idClase}) => {
    // const [studentAttendance, setStdentAttendance] = useState({})
    const [statusAttendance, setStatusAttendance] = useState('')
    const day = getDate()
    // console.log(alumno.attendance.some(item => item.day === day))

    useEffect(() => {
        // TODO: QUE REVISE POR DIA, INCLUSO EN DIAS PASADOS
        const indexDay = alumno.attendance.findIndex(item => item.day === day)
        if(indexDay != -1) {
            setStatusAttendance(alumno.attendance[indexDay].status)
        }
    },[])



    const saveAttendance = (idStudent, status) => {
        if(statusAttendance === '') {
            const day = getDate()
            // setStdentAttendance({day, status})

            const dataToSave = {day, status}
            setStatusAttendance(status)

            // const classeActualizada = {...clase}

            // setClase()
            // console.log(studentAttendance)
            saveAttendanceLocalStorage(idClase, idStudent, dataToSave)
        } else {
            setStatusAttendance('')
        }
    }


    // const handleDeleteStudent = id => {
    //     console.log('elimindo '+id)
    // }

  return (
    <div
        className='my-1 p-2 px-6 text-xl  font-bold  w-full bg-slate-100 flex flex-col md:flex-row md:justify-between rounded-xl border-2 border-gray-400 shadow-xl items-center'
    >
        {editionMode && 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
            onClick={() => handleDeleteStudent(alumno.id)}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        }

        <div className='flex items-center justify-center'>
           <p className='block text-center'>{alumno.name}</p> 
        </div>
        <div className='flex items-center gap-4 rounded justify-center w-40'>
            <button
                type='button'
                className={`${statusAttendance === 'present' ? 'bg-green-600 w-12 h-10' : 'bg-green-200 w-12 h-10'}  rounded-md shadow-md outline-offset-4 ${(statusAttendance === 'late' || statusAttendance === 'ausent') && 'hidden'}`}
                onClick={() => saveAttendance(alumno.id, "present")}
            ></button>
            <button
                type='button'
                className={`${statusAttendance === 'late' ? 'bg-yellow-300 w-12 h-10' : 'bg-yellow-100 w-12 h-10'}  rounded-md shadow-md outline-offset-4 ${(statusAttendance === 'present' || statusAttendance === 'ausent') && 'hidden'} `}
                onClick={() => saveAttendance(alumno.id, "late")}
            >
            </button>
            <button
                type='button'
                className={`${statusAttendance === 'ausent' ? 'bg-red-600 w-12 h-10' : 'bg-red-200 w-12 h-10'} rounded-md shadow-md outline-offset-4 ${(statusAttendance === 'late' || statusAttendance === 'present') && 'hidden'}`}
                onClick={() => saveAttendance(alumno.id, "ausent")}
            >
            </button>
        </div>
    </div>
  )
}

export default StudentComponent