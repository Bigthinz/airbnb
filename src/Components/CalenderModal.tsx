import React from 'react'
import Calender from './Calender'

const CalenderModal = () => {
  return (
    <div>
        <div className=' shadow-2xl p-8 bg-white w-[55rem] rounded-xl'>
            <h2 className='text-xl font-bold'>10 nights</h2>
            <p className='mb-6'>Dec 13, 2022 - Dec 23, 2022</p>
            <Calender/>
        </div>
    </div>
  )
}

export default CalenderModal