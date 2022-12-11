import React from 'react'
import { Link } from 'react-router-dom'
import Rental from './Rental'
import {rentals}from '../Utils/data'
import Nav from './Nav'



const data = rentals



const Rentals = () => {
   
  console.log(data)


  return ( 
    <>
    <Nav/>
    <div className='w-5/6 m-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
      
      {
        data.map((item)=>{

          return (
           <Link  key={item.title} to='rooms/:id'> <Rental  title={item.title} image={item.image} price={item.price}/></Link>
          ) 

        })
    }        
        
    </div>
    </>
  )
}

export default Rentals