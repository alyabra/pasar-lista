import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { saveNewStudentLocalStorage } from '../helpers/useLocalStorage'


export default function ModalNewStudent({params, setEditionMode, handleNewStudent}) {
  let [isOpen, setIsOpen] = useState(false)
  const [newStudent, setNewStudent] = useState({name: '', apeido: ''})

  function closeModal() {
    // console.log("hola")
    // handleNewStudent()
    // setEditionMode(false)
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const nombreCompleto = `${newStudent.name} ${newStudent.apeido}`
    // setNewStudent({nombre: newStudent.name, apeido: newStudent.apeido})
    // console.log(newStudent)
    if(newStudent.name) {
      console.log("agregado", nombreCompleto)
      handleNewStudent(newStudent, params.id)
      // saveNewStudentLocalStorage(newStudent, params.id)
    }
    // setNewStudent({})
    console.log(newStudent)
    // handleNewStudent()
    closeModal()
  }

  // const handleNewStudent = () => {
  //   console.log(newStudent)
  //   const nombreCompleto = `${newStudent.name} ${newStudent.apeido}`
  //   setNewStudent({nombre: newStudent.name, apeido: newStudent.apeido})
  //   if(newStudent.name) {
  //     console.log("agregado", nombreCompleto)
      // saveNewStudentLocalStorage({name: nombreCompleto}, params.id)
    // }
    // setNewStudent({})
  // }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md w-32 h-20 bg-black  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Agregar nuevo estudiante
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      className='flex flex-col gap-2'
                      onSubmit={handleSubmit}
                    >
                      <div>
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
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Agregar
                        </button>
                      </div>
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
