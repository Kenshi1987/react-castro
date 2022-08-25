import React from 'react';
import { useState } from 'react';
import './Contador.css'

export const Contador = ({stock = 10, initial = 1, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const aumentarContador = ()=>{
        if (contador < stock)
        setContador (contador + 1)
    }

    const disminuirContador = ()=>{
        if (contador > 1)
        setContador (contador - 1)
    }

  return (
    <div>
        <h1>Contador de Clicks</h1>
        <button className='botoncito resta' onClick={disminuirContador}>-</button>
        <span className='numero'>{contador}</span>
        <button className='botoncito' onClick={aumentarContador}>+</button>
        <div><button disabled={contador ===0} onClick={()=>{onAdd(contador)}}>Agregar al Carrito</button></div>

    </div>
  )
}

export default Contador