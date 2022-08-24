import React from 'react'
import Item from '../Item/Item'
import {Flex} from '@chakra-ui/react';

function ItemList({items}) {
  return (
    <>
      <Flex align="center" justify="center" flexWrap="wrap">
        {items.map ((item, indx)=>
            <Item key={indx} id={item.id} title={item.title} price={item.price}/>

        )}  
      </Flex>  

       
    </>
  );
}

export default ItemList;