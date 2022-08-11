import React from 'react'

export default function ItemListContainer({greeting}) {
  return (
    <div>
        <span style={{border:'3px solid black',backgroundColor:'lightgrey', margin:'50px'}}>{greeting}</span>
    </div>
  )
}
