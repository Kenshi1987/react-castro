import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { Card } from 'react-bootstrap';

export function ItemDetail({item}) {
    const {id, category, description, price, title, img} = item;
    const {addItem} = useContext (CartContext);
    const [counter, setCounter] = useState(0);

    function onAdd (count){
      
      setCounter(count);

      addItem (item, count);
    }
  return (
    <div className="d-flex flex-wrap p-3 m-3">
      <Card>
        <h1>{title} - {category}</h1>
        <h3>{description}</h3>
        <img src={img} alt=""></img>
        <h2>{price}</h2>
        {counter ? 
        <Link to="/cart"><Button>Finalizar Compra</Button></Link> : 
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>}     
      </Card>   
    </div>
  )
}

