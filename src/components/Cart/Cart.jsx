import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export function Cart(){
  const {items, removeItem,clear} = useContext (CartContext);

  return (

    <>
    
    {!items.length ? <h2> Carrito Vacio <Link to="/"><Button className='m-4'>Ir al Home</Button></Link></h2> :
    
    <>    
      <ol>
         {items.map(((item, indx) => <li key={indx}> {item.title} - {item.quantity} <Button className='m-3' onClick={()=> removeItem(item.id)}>Remover Articulo</Button></li>))}
      </ol>
      <h3>precio total = ${items.reduce((pv, cv)=> pv + (cv.price * cv.quantity),0)}</h3>
    </>
    }
      <div>        
        <Button className='m-3' onClick={clear}>Vaciar Carrito</Button>
      </div>
    </>
  )
  }
  
  
  
  
  
  
  
  
