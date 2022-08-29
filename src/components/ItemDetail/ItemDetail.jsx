import React from 'react';

export function ItemDetail({item}) {
    const {id, category, price, title, img} = item;
  return (
    <div>
        <h1>{title} - {id}</h1>
        <img src={img} alt=""></img>
        <h2>{price}</h2>
    </div>
  )
}

