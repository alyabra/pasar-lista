import React from 'react'

const ClassInfo = ({datos}) => {
  const {materia, grupo, semestre, year} = datos
  // console.log(datos)
  return (
    <div
      className='flex flex-col items-center md:flex-row md:justify-between px-10 text-xl pb-5'
    >
      <h1 className=' font-bold'>Materia: {'  '}<span className='text-2xl'>{materia}</span></h1>
      <div
        className='flex gap-10'
      >
        <p >Año: <span className='text-2xl font-bold'>{year}</span></p>
        <p >Semestre: <span className='font-bold text-2xl'>{semestre}</span></p>
      </div>
    </div>
  )
}

export default ClassInfo