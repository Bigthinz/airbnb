import React from 'react'
import Navbar from './Navbar'

const Login = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <Navbar/>
        </div>
        <div className='flex justify-center m-auto sm:w-5/6'>
           <div className='sm:w-full lg:w-[60%] xl:w-[40%]  md:border-2 rounded-xl md:mt-[4rem]'>
              <header className='border-b-2 py-[1.5rem]'><h1 className='text-center font-medium text-xl'>Login or sign up</h1></header>
              <div className='p-[2.5rem]'>
                <h1 className='mt-5 mb-5 text-2xl font-semibold'>Welcome to Airbnb</h1>
                <div>
                    <div className='border-2 rounded-md mb-2'>
                      <div className='border-b-2 p-2 '>
                        <div className=''>
                          <label htmlFor="country">Email</label>
                          <input type="text" placeholder='email' name='country' className=' outline-none w-full h-[3rem] p-2 roounded '/>
                        </div>
                      </div>
                      <div className='p-2'>
                        <label htmlFor="number">Password</label>
                        <input type="text"  name='number' className='outline-none w-full h-[3rem] p-2 roounded '/>
                      </div>
                    </div>
                    <p className='text-[0.8rem]'>We’ll call or text you to confirm your number. Standard message and data rates apply. <span className='underline'>Privacy Policy</span></p>
                    <button className='bg-button-slide my-5 text-white text-[1.1rem]  w-full py-3 rounded-md'>continue</button>
                </div>
              </div>
           </div>
            
        </div>
    </div>
  )
}

export default Login