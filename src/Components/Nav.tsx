import React from 'react'
import Filter from './Filter'
import Navbar from './Navbar'

const Nav = () => {
  return (
    <div className='sticky top-0 bg-white'>
        <Navbar/>
        <Filter/>
    </div>
  )
}

export default Nav



