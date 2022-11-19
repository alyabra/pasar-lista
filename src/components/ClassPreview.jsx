import React from 'react'

const ClassPreview = ({claseInfo}) => {
  return (
    <div
    className='my-2 p-4 px-5 text-xl  font-bold  w-full bg-slate-100 flex flex-col md:flex-row md:justify-between rounded-xl border-2 border-gray-400 shadow-xl'
>
    <div className='flex items-center justify-center'>
       <p className='block text-center'>{claseInfo.name}</p> 
    </div>
    <div className='flex items-center gap-6 rounded justify-center'>
        <p>{claseInfo.grup}</p>
        <p>{claseInfo.semester}</p>
        <p>{claseInfo.school}</p>
    </div>
</div>
  )
}

export default ClassPreview