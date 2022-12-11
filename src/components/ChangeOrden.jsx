import React from 'react'

const ChangeOrden = ({handleChangeOrder, orderBy}) => {
  return (
<div className="flex justify-end">
    <div className="w-fit m-1 p-1 bg-slate-100 rounded-md shadow-md">
      <label htmlFor="ordenar" className="font-bold">Elegir orden: </label>
      <select name="ordenar" id="ordenar" value={orderBy}
        onChange={(e) => handleChangeOrder(e.target.value)}
      >
        <option value="">Elegir orden</option>
        <option value="name">Por nombre</option>
        <option value="lastName">Por apeido</option>
      </select>
    </div>
  </div>
  )
}

export default ChangeOrden