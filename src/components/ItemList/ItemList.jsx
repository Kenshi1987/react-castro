import React from 'react'
import Item from '../Item/Item'

function ItemList({items}) {
  return (
    <>
        {items.map ((item, indx)=>
            <Item key={indx} id={item.id} title={item.title} price={item.price}/>

        )}    

       
    </>
  );
}

export default ItemList;