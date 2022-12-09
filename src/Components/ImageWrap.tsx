import React from 'react'


interface Image {
    image: string
}

const ImageWrap = ({image}:Image) => {
  return (
    <div className='max-w-none'>
        <img src={image} alt='' className='w-full cover'/>
    </div>
  )
}

export default ImageWrap