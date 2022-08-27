import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {ItemDetail} from '../ItemDetail/ItemDetail';

export function ItemDetailContainer() {

  const {id} = useParams(); 
  const [item, setItem] = useState ({});

  useEffect(()=> {
    let products = [
                    {id: 1, title: 'Aceites Esenciales', price: '$ 500', img:'./img/aceites.jpg'}, 
                    {id: 2, title: 'Velas Aromaticas', price: '$500', img:'./img/velas.jpg'},
                    {id: 3, title: 'Sahumerios', price: '$ 400', img:'./img/sahumerios.jpg'}, 
                    {id: 4, title: 'Jabones', price: '$400', img:'./img/jabones.jpg'},
                    {id: 5, title: 'Hierbas', price: '$ 400', img:'./img/hierbas.png'}, 
                    {id: 6, title: 'Carbones', price: '$400', img:'./img/carbones.jpg'}
                  ];
      new Promise((resolve) => {
        
        setTimeout(()=>{
            resolve(products.find ((element)=> element.id === id));
        },2000)

      }).then((data)=>{
        setItem(data);
      })
  }, [id])

  return (
    <div>
      { Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>}
      </div>
  )
}

