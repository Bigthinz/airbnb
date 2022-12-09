import React from 'react'
import Navbar from './Navbar'
import RoomGrid from './RoomGrid'
import { StarIcon } from '@heroicons/react/24/solid'
import { ArrowUpTrayIcon} from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'



const SingleRental = () => {
  return (
    <div>
        <Navbar/>
        <div className='w-5/6 m-auto'>
            <div className=' mt-[4rem]'>
                <h1 className='text-[2rem] mb-3 '>tuff cliff cave house</h1>
                <div className='flex justify-between'> 
                    <div className='flex space-x-6 '>
                        <div className='space-x-2 flex'>
                        <StarIcon className="h-6 w-6"/><span>4.81</span>
                            <span></span> reviews
                        </div>
                        <div>
                        
                            <ul className='flex  space-x-2 '>
                                <li>Cotignac</li>
                                <li>Provence-Alpes-Côte d&apos;Azur</li>
                                <li>France</li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-x-2 flex'>
                        
                        <button className='flex space-x-1 hover:bg-gray-50 p-2 rounded'><ArrowUpTrayIcon className="h-6 w-6 "/> <span>share</span></button>
                        <button className='flex space-x-1 hover:bg-gray-50 p-2 rounded' ><HeartIcon className="h-6 w-6 "/> <span>save</span></button>
                    </div>
                </div>
            </div>
            <RoomGrid/>
        </div>
s
    </div>
  )
}

export default SingleRental