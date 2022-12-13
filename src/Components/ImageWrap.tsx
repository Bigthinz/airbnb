import React from 'react'


interface Image {
    image: string
}

const ImageWrap = ({image}:Image) => {
  return (
    <div className='max-w-none h-full relative'>
        <img src={image} alt='' className='w-full h-full object-cover '/>
    </div>
  )
}

export default ImageWrap