import React from 'react'
import ImageWrap from './ImageWrap'
import image1 from '../Assets/gal-1.jpeg'
import image2 from '../Assets/gal-2.jpeg'
import image3 from '../Assets/gal-3.jpeg'
import image4 from '../Assets/gal-4.jpeg'
import image5 from '../Assets/gal-5.jpeg'


const RoomGrid = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-[200px] auto-cols-auto gap-4  mt-8 overflow-hidden rounded-xl' >
        <div className='col-span-2 row-span-2 overflow-hidden rounded-xl'>
            <ImageWrap image={image1}/>
        </div>
        <div className=''>
            <ImageWrap image={image2} />
        </div>
        <div className=''>
            <ImageWrap image={image3} />
        </div>
        <div className=''>
            <ImageWrap image={image4} />
        </div>
        <div className=''>
            <ImageWrap image={image5} />
        </div>
        

    </div>
  )
}

export default RoomGrid