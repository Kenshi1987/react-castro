import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function Cart(){
  const {items} = useContext (CartContext);

  return (

    <>
    <div>Cart</div>
    {!items && <span>Carrito Vacio</span>}
    {items && <ol>
      {items.map((item => <li> {item.title} - {item.quantity}</li>))}
      </ol>}
    </>
  )
  }
  
  
  
  
  
  
  
  
