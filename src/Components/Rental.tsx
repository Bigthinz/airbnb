import React from 'react'
import house1 from '../Assets/hus.webp'

interface item{
  title:string
  image:string,
  price:string
}




const Rental = ({title, image, price}: item) => {
  return (
    <a href='/'>
        <div className=''>
            <div className=' '>
            <div className='flex h-80 w-full rounded-xl overflow-hidden'>
                <img 
                src={image} 
                alt='' 
                className=' object-cover w-full items-stretch' />
            </div>
            </div>
            <div className='py-2'>
            <p className='font-semibold my-1 mt-3'>{title}</p>
            <p className='mb-1'>12km to national park</p>
            <p className='mb-1'>Sep 3-7</p>
            <p ><span className='font-semibold mb-1'>${price}</span> night</p>
            </div>
        </div>
    </a>
  )
}

export default Rental