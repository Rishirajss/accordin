import React from 'react'
import AccordinItems from './AccordinItems'

export default function Accordin({data}) {
  return (
    <>
       <div className='accordion'>
            {data.map((value, index)=> <AccordinItems title={value.title} text={value.text} num={index} key={value.title}/>)}
            
       </div> 
    </>
  )
}
