import React from 'react'
import { Link } from 'react-router-dom'

const ClassPreview = ({claseInfo, handleDeleteClass, editionMode}) => {

  return (
  <div className='my-1 p-4 px-4 text-xl  font-bold  w-full bg-slate-100 rounded-xl border-2 border-gray-400 shadow-xl flex flex-col md:flex-row justify-between'>
    <div
    className=' flex flex-col lg:flex-row  '
    // onClick={() => handleClick(claseInfo.id)}
    >
        <div className='flex items-center justify-center'>
            {editionMode && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={2.2} stroke="currentColor" className="w-10 h-6 "
                    onClick={() => handleDeleteClass(claseInfo.id)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>}

          <p className=' text-center mx-2 w-80'>{claseInfo.name}</p> 
        </div>
        <div className='flex items-center gap-6 rounded justify-center'>
            <p className='w-5'>{claseInfo.grup}</p>
            <p className='w-5'>{claseInfo.semester}</p>
            <p className='w-30'>{claseInfo.school}</p>
        </div>
    </div>
    <div className='flex justify-center items-center gap-x-4'>
      <Link
        to={`/pasa-lista/${claseInfo.id}`}
      >
      <button className='bg-stone-600 h-10 px-2 rounded-md text-white hover:bg-stone-900'>
        Pasar lista
      </button>
      </Link>
      <Link
        to={`/resumen-asistencia/${claseInfo.id}`}
      >
        <button className='bg-slate-600 h-10 px-2 rounded-md text-white hover:bg-slate-900'>
          Realizar resumen
        </button>
      </Link>
    </div>
  </div>
  )
}

export default ClassPreview