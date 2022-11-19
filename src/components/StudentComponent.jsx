import React from 'react'

const StudentComponent = ({alumno}) => {

  return (
    <div
        className='my-2 p-4 px-5 text-xl  font-bold  w-full bg-slate-100 flex flex-col md:flex-row md:justify-between rounded-xl border-2 border-gray-400 shadow-xl'
    >
        <div className='flex items-center justify-center'>
           <p className='block text-center'>{alumno}</p> 
        </div>
        <div className='flex items-center gap-6 rounded justify-center'>
            <button
                type='button'
                className='bg-green-600 w-14 h-14 rounded-md shadow-m outline-offset-4'
            >
                +´
            </button>
            <button
                type='button'
                className='bg-yellow-400 w-14 h-14 rounded-md shadow-md'
            >
            </button>
            <button
                type='button'
                className='bg-red-600 w-14 h-14 rounded-md shadow-md'
            >
            </button>
        </div>
    </div>
  )
}

export default StudentComponent