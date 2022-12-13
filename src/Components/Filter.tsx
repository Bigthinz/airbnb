import React, { useEffect } from 'react'
import sunset from '../Assets/beach.png'


import { filters } from '../Utils/data'



const Filter = () => {
  return (
    <div className='flex w-5/6 h-32 justify-between items-center  m-auto  '>
    <div className=' flex flex-1 relative m-auto text-center '>

    {
        filters.map(filter => {
            return (
                <div key={filter.title} className="text-center cursor-pointer justify-center  mr-12  hover:after:content-[''] hover:after:absolute hover:after:bottom-[-0.5rem] hover:after:left-0 hover:after:w-[100%] hover:after:h-[1px] hover:after:bg-black">
                    <div className='pb-2'>
                        <img src={filter.image} alt='google logo' className='w-6 m-auto h-6'/>
                    </div>
                    <p className='text-[11px]'>{filter.title}</p>
                </div>
            )
        })
    }

    </div>

    <div>
        <button className='flex shadow-sm  p-3 px-5 rounded-md cursor-pointer border border-off-grey'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
        filter
        </button>
    </div>

    </div>
  )
}

export default Filter