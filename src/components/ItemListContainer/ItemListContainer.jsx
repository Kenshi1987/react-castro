import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'

export function ItemListContainer({greeting}) {
  const [items, setItems] = useState ({});
  const {categoryid} = useParams();

  useEffect(()=> {

    let products = [
                    {id: 1, category: 'Aceites', title: 'Aceites Esenciales', price: '$ 500', img:'./img/aceites.jpg'}, 
                    {id: 2, category: 'Velas', title: 'Velas Aromaticas', price: '$500', img:'./img/velas.jpg'},
                    {id: 3, category: 'Sahumerios', title: 'Sahumerios', price: '$ 400', img:'./img/sahumerios.jpg'}, 
                    {id: 4, category: 'Jabones', title: 'Jabones', price: '$400', img:'./img/jabones.jpg'},
                    {id: 5, category: 'Hierbas', title: 'Hierbas', price: '$ 400', img:'./img/hierbas.png'}, 
                    {id: 6, category: 'Carbones', title: 'Carbones', price: '$400', img:'./img/carbones.jpg'}
                  ];
      new Promise((resolve) => {
        let productsFiltered = [];
        setTimeout(()=>{
            productsFiltered = categoryid ? products.filter((element)=> element.category === categoryid) : products;
            resolve(productsFiltered);

        },2000)
      }).then((data)=>{
        setItems(data)
      })
  }, [categoryid])

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


