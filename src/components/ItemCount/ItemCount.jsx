import React from 'react'
import { useState } from 'react'
import {Button} from 'react-bootstrap'

export default function ItemCount({stock, initial, onAdd}) {
 
 const [counter, setCounter] = useState(initial)
 
     return (
    <>
    
    <div><Button className="btn btn-primary btn-lg"onClick={() => {setCounter (counter - 1)}} disabled={counter===initial}>-</Button></div>
    <span>{counter}</span>
    <div><Button className="btn btn-primary btn-lg" onClick={() => {setCounter (counter + 1)}} disabled={counter===stock}>+</Button></div>
    <div><Button className="btn btn-primary btn-lg" onClick={()=>onAdd(counter)} disabled={counter ===0}>Agregar al Carrito</Button></div>
    </>
  )
}
