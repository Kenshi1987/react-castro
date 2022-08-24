import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({greeting}) {
  const [items, setItems] = useState ({});

  useEffect(()=> {

    let products = [
                    {id: 1, title: 'Aceites Esenciales', price: '$ 500'}, 
                    {id: 2, title: 'Velas Aromaticas', price: '$500'},
                    {id: 3, title: 'Sahumerios', price: '$ 400'}, 
                    {id: 4, title: 'Jabones', price: '$400'},
                    {id: 5, title: 'Hierbas', price: '$ 400'}, 
                    {id: 6, title: 'Carbones', price: '$400'}
                  ];
      new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            resolve(products);

        },2000)
      }).then((data)=>{
        setItems(data)
      })
  }, [])

  return (
    <div>
        <span>{greeting}</span>
        {items.length ?
          <ItemList items={items}/> :
          <Spinner></Spinner>
        }
    </div>
  )
}

export {ItemListContainer};
