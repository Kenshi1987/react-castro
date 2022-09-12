import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {ItemDetail} from '../ItemDetail/ItemDetail';

export function ItemDetailContainer() {

  const {id} = useParams(); 
  const [item, setItem] = useState ({});

  useEffect(()=> {
    let products = [
      {id: 1, category: 'Aceites', title: 'Aceites Esenciales', price: '500', img:'../img/aceites.jpg', description:'Aceites puros de origen Vegetal, sin agregados quimicos. Esencias puras de la mas alta calidad. Amplias Fragancias.'}, 
      {id: 2, category: 'Velas', title: 'Velas Aromaticas', price: '500', img:'../img/velas.jpg'},
      {id: 3, category: 'Sahumerios', title: 'Sahumerios', price: '400', img:'../img/sahumerios.jpg'}, 
      {id: 4, category: 'Jabones', title: 'Jabones', price: '400', img:'../img/jabones.jpg'},
      {id: 5, category: 'Hierbas', title: 'Hierbas', price: '400', img:'../img/hierbas.png'}, 
      {id: 6, category: 'Carbones', title: 'Carbones', price: '400', img:'../img/carbones.jpg'}
    ];
      new Promise((resolve) => {
        
        setTimeout(()=>{
            resolve(products.find ((element)=> element.id == id));
        },2000)

      }).then((data)=>{
        setItem(data);
      })
  }, [id])

  return (
    <div className="d-flex justify-content-center m-5">
      { Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>}
      
    </div>
  )
}

