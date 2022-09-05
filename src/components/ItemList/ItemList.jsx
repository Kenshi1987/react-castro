import React from 'react'
import Item from '../Item/Item'

function ItemList({items}) {
  return (
    <> 
      
            <div className="d-flex flex-wrap">
            
            {items.map ((item, indx)=>
            <Item key={indx} id={item.id} title={item.title} description={item.description} price={item.price} img={item.img}/>
            )}  
            </div>
             
            
    </>
  );
}

export default ItemList;