import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


export default function ModalNewStudent({params, setEditionMode, handleNewStudent}) {
  let [isOpen, setIsOpen] = useState(false)
  const [newStudent, setNewStudent] = useState({name: '', apeido: ''})

  function closeModal() {
    setNewStudent({name: '', apeido: ''})
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(newStudent.name != '') {
      handleNewStudent(newStudent, params.id)
    }
    closeModal()
  }

  const handleReadFile = (e) => {
    e.preventDefault()
    const file = e.target[0].files[0]
    if(!file) return
    
    const fileReader = new FileReader();

    fileReader.readAsText( file )
    //TODO: Verificar que no guarda espacios vacios con un Trim
    fileReader.onload = () => {
      const arrayStudents = fileReader.result.split('\n')
      for(let i=0; i < arrayStudents.length; i++) {
        const studentTemp = arrayStudents[i].split(',')
        if(studentTemp[0] != '') {
          handleNewStudent({name: studentTemp[0], apeido: studentTemp[1]}, params.id)
        }
        
      }

    }
    fileReader.onerror = () => {
      console.log(fileReader.error)
    }
    closeModal()

  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center shadow-2xl">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md w-32 h-20 bg-cyan-300  px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Agregar estudiante nuevo
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 pb-4 pt-1 text-left align-middle shadow-xl transition-all">
                  <div className='flex justify-end'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"
                      onClick={closeModal}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6 text-gray-900 mb-4 font-bold"
                  >
                    Agregar nuevo estudiante o varios desde un archivo
                  </Dialog.Title>

                  <div className="flex flex-col gap-4">
                    <form
                      className='flex flex-col items-center gap-1 p-2 bg-slate-200 rounded-md shadow-xl'
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <h2 className=" font-bold text-lg"
                        >Agregar un estudiante</h2>
                        <label htmlFor="nombre"
                        >Nombre</label>
                        <input type="text" id="nombre" 
                          placeholder='Nombre'
                          className='border border-black rounded-sm w-full px-2 py-1'
                          value={newStudent.name}
                          onChange={e => setNewStudent({...newStudent, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label htmlFor="apeidos">Apeidos</label>
                        <input type="text" id="apeidos" 
                          placeholder='Apeidos'
                          className=' border border-black rounded-sm w-full px-2 py-1'
                          value={newStudent.apeido}
                          onChange={e => setNewStudent({...newStudent, apeido: e.target.value})}
                        />
                      </div>
                      
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-200 px-2 py-2 my-2 text-sm font-medium text-black hover:bg-blue-300 focus:outline-none focus-visible:ring-2  w-3/4 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                          shadow-md"
                        >
                          Agregar
                        </button>
                      
                      </form>

                      <form
                      className='flex flex-col items-center gap-1 p-2 bg-slate-200 rounded-md shadow-xl'
                        onSubmit={handleReadFile}
                      >
                        <div className='rounded-md text-center flex flex-col gap-2 p-2 w-full'>
                        <label className='font-bold text-lg'htmlFor="file">Agregar varias alumnos desde una lista txt</label>
                        <input type="file" name='file' id='file' 
                        placeholder='jj'
                        multiple={false}
                        accept=".txt"
                        />
                        </div>
                        <button className='submit bg-blue-200 text-black hover:bg-blue-300 p-2 rounded-md w-3/4 shadow-md'>Agregar nuevos estudiantes</button>
                      </form>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
