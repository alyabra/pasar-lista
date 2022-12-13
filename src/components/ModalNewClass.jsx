import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ModalNewClass({handleNewClass}) {
  let [isOpen, setIsOpen] = useState(false)
  const [newClassName, setNewClassName] = useState('')
  const [escuela, setEscuela] = useState('')
  const [semestre, setSemestre] = useState('')
  const [salon, setSalon] = useState('')
  const [year, setYear] = useState('')

  // {name: "Matemáticas I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 1}
  function closeModal() {
    setNewClassName('')
    setEscuela('')
    setSemestre('')
    setSalon('')
    setYear('')
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleNewClass({
      name: newClassName,
      grup: salon,
      semester: semestre,
      year: Number(year),
      school: escuela,
      alumnos: [],
      attendanceDays: []
    })
    closeModal()
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center shadow-xl">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md w-32 h-20 bg-cyan-300   px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          + Agregar nueva clase
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
                
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 pt-1 pb-4 text-left align-middle shadow-xl transition-all">
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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Agregar nueva clase
                  </Dialog.Title>
                  <div className="m-2">
                    <form
                      className='flex flex-col gap-2'
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label htmlFor="nombre"
                        >Nombre de la clase</label>
                        <input type="text" id="nombre" 
                          placeholder='Nombre'
                          className='border border-black rounded-sm w-full px-2 py-1'
                          value={newClassName}
                          onChange={e => setNewClassName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="escuela">Escuela</label>
                        <input type="text" id="escuela" 
                          placeholder='COBAEM'
                          className=' border border-black rounded-sm w-full px-2 py-1'
                          value={escuela}
                          onChange={e => setEscuela(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="year">Año</label>
                        <input type="text" id="year" 
                          placeholder='2022'
                          className=' border border-black rounded-sm w-full px-2 py-1'
                          value={year}
                          onChange={e => setYear(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="semestre">Semestre</label>
                        <input type="text" id="semestre" 
                          placeholder='2'
                          className=' border border-black rounded-sm w-full px-2 py-1'
                          value={semestre}
                          onChange={e => setSemestre(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="salon">Salon</label>
                        <input type="text" id="salon" 
                          placeholder='8A'
                          className=' border border-black rounded-sm w-full px-2 py-1'
                          value={salon}
                          onChange={e => setSalon(e.target.value)}
                
                        />
                      </div>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-md"
                        >
                          Agregar
                        </button>
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
