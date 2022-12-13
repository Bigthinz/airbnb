import React from 'react'

const LoginModal = () => {
  return (
    <div className='absolute right-[1rem] w-[15rem] bg-white top-[4rem] p-3 shadow-2xl rounded-md z-20 divide-y '>
        <ul className='py-2'>
            <a href='/login' ><li className='p-2 hover:bg-gray-50'>Sign up</li></a>
            <a href='/login' ><li className='p-2 hover:bg-gray-50'>Login</li></a>
        </ul>
        <ul className='py-2'>
            <a href='/#' ><li className='p-2 hover:bg-gray-50'>Airbnb your home</li></a>
            <a href='/#' ><li className=' p-2 hover:bg-gray-50'>Host an experience</li></a>
            <a href='/#' ><li className='p-2 hover:bg-gray-50'>Help</li></a>
        </ul>
    </div>
  )
}

export default LoginModal