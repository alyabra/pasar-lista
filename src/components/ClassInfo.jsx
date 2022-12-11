import React from 'react'

const ClassInfo = ({datos}) => {
  const {name, grup, semester, year} = datos
  return (
    <div
      className='flex flex-col items-center md:flex-row md:justify-between px-10 text-xl pb-5 w-full'
    >
      <h1 className=' font-bold'>Materia: <span className='text-2xl'>{name}</span></h1>
      <div
        className='flex gap-10'
      >
        <p >Grupo: <span className='text-2xl font-bold'>{grup}</span></p>
        <p >Año: <span className='text-2xl font-bold'>{year}</span></p>
        <p >Semestre: <span className='font-bold text-2xl'>{semester}</span></p>
      </div>
    </div>
  )
}

export default ClassInfo