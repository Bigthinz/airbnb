import React from 'react'
import Navbar from './Navbar'
import RoomGrid from './RoomGrid'
import { StarIcon } from '@heroicons/react/24/solid'
import { ArrowUpTrayIcon} from '@heroicons/react/24/solid'
import { HeartIcon ,ChatBubbleOvalLeftIcon} from '@heroicons/react/24/outline'



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
            {/* Hero grid section */}
            <RoomGrid/>
            {/* end of hero grid section */}

            <section>
                <div className='grid  grid-cols-3 mt-32'>
                    <section className=' col-span-2 grid-rows-3 divide-y '> 
                        <div className='flex justify-between  py-8'>
                            <div className=''>
                                <h2 className='text-2xl font-medium mb-2'>Cave hosted by Christophe</h2>
                                <ul className='flex  space-x-2 '>
                                <li>4 guests</li>
                                <li>2 beds</li>
                                <li>1 bath</li>
                            </ul>
                            </div>
                            <div>
                                <img src="	https://a0.muscache.com/im/users/8211219/profile_pic/1376732172/original.jpg?im_w=240" alt="" className=' w-[4rem] h-[4rem] rounded-full' />
                            </div>
                        </div>
                        <div className='py-8'>
                            <div className='flex '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>


                                <div>
                                    <h3 className='font-medium text-xl pb-1'>Experienced host</h3>
                                    <p className='text-gray-400'>Christophe has 741 reviews for other places.</p>
                                </div>
                            </div>    <div className='flex pt-8'>
                            <ChatBubbleOvalLeftIcon className="h-9 w-9 mr-3"/>

                                <div>
                                    <h3 className='font-medium text-xl pb-1'>Great communication</h3>
                                    <p className='text-gray-400'>90% of recent guests rated Christophe 5-star in communication.</p>
                                </div>
                            </div>
                        </div>
                        <div className='py-8'>
                            <img className='w-40 mb-6' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="aircover" />
                            <p className='mb-6'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                            <a href="/" className='underline font-medium'>Learn more</a>
                        </div>
                    </section>
                    <section>2</section>
                </div>
            </section>


        </div>

    </div>
  )
}

export default SingleRental