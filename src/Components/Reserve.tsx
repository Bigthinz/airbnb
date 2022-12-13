import React,{ useState , FocusEvent } from 'react'
import Calender from './Calender'
import CalenderModal from './CalenderModal'


// interface FocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> {
//     relatedTarget: EventTarget | null;
//     target: EventTarget & T;
// }

const Reserve = () => {

    const [toggleCalender, setToggleCalender] = useState(false)

    const handleFocus = (e:FocusEvent) => {
        setToggleCalender(!toggleCalender)
    }

   
  return (
    <>
    <div className='shadow-md  py-8 px-4 border rounded-xl sticky top-32 '>
                            <p className='space-x-1'><span className='text-2xl font-medium text-gray-400 line-through'>$305</span><span className='text-2xl font-medium '>$234 </span>night </p>
                            <div>
                                <div className='relative border rounded-md mt-4 divide-y'>
                                    <div className='flex  divide-x ' onFocus={handleFocus}   >
                                        <div className='px-3 py-3'>
                                            <label className='block uppercase font-medium text-[0.8rem]' htmlFor="checkin">check-n</label>
                                            <input
                                             
                                             className='w-full outline-none' 
                                             type="text"  
                                             name='checkin' 
                                             placeholder='MM/DD/YYYY'/>
                                        </div>
                                        <div className='px-3 py-3 '>
                                            <label className='block uppercase font-medium text-[0.8rem]' htmlFor="checkout">checkout</label>
                                            <input className='w-full outline-none' type="text"  name='checkin' placeholder='MM/DD/YYYY'/>
                                        </div>
                                    </div>
                                    <div className='px-3 py-3 '>
                                            <label className='block uppercase font-medium text-[0.8rem]' htmlFor="guest">GUEST</label>
                                            <input className='w-full outline-none' type="text"  name='guest' placeholder='1 guests'/>
                                    </div>
                                    {
                                        toggleCalender && 
                                        <div className='absolute top-0 right-20'>
                                            <CalenderModal/>
                                        </div>
                                    }
                                    
                                    
                                </div>
                            <button className='bg-button-slide my-5 text-white text-[1.1rem]  w-full py-3 rounded-md'>Reserve</button>
                            <p className='text-center mb-5' >You won&apos;t be charged yet</p>
                            <div className='border-b pb-4'>
                                <div className='flex justify-between mb-4'>
                                    <span className='underline'>$305 x 17 nights</span>
                                    <span>$5,193</span>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <span className='underline'>Weekly discount</span>
                                    <span className='text-green-500'>-$510</span>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <span className='underline'>Cleaning fee</span>
                                    <span>$$37</span>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <span className='underline'>Service fee</span>
                                    <span>$666</span>
                                </div> 
                            </div>
                            <div className='pt-6'>
                                <div className='flex justify-between font-medium'>
                                    <span className=''>Total before taxes</span>
                                    <span>$5382</span>
                                </div> 
                            </div>
                            
                            </div>
                            
                       </div>
            
    </>
  )
}

export default Reserve