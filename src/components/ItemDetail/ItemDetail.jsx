import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function ItemDetail({item}) {
    const {id, category, description, price, title, img} = item;
    const [counter, setCounter] = useState(0);

    function onAdd (count){
      console.log(`Esta es la cantidad de Items que la persona compra ${count}`);
      setCounter(count)
    }
  return (
    <div>
        <h1>{title} - {category}</h1>
        <h3>{description}</h3>
        <img src={img} alt=""></img>
        <h2>{price}</h2>
        {counter ? 
        <Link to="/cart"><Button>Finalizar Compra</Button></Link> : 
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>}        
    </div>
  )
}

