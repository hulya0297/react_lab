import React from 'react'
import Card from '../Component/Card'
import Button from '../Component/Button'

function Mainn() {
  let custom =[{
    title:'Hello',
    price:'50$',
    id: 0,
  }]
  return (
    <>
    {
      custom.map((item)=>(
       <>
       <Card title={item.title} price={item.price} key={item.id}  />
       </> 

      ))
    }
    
    </>
  )
}

export default Mainn