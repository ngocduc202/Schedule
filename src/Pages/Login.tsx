import React from 'react'
import LoginImage from '../img/Login.jpg'
import Logo from '../img/rangdong.png'

const Login = () => {
  return (
    <div className='w-full h-screen relative overflow-hidden'>
      <div className='flex min-h-screen h-full overflow-hidden relative'>
        <div className='w-full flex flex-1 justify-center items-center bg-gradient-to-r from-[#07bd89] to-[#020f15]'>
          <img src={LoginImage} alt="LoginImage" className='w-full h-full object-cover' />
        </div>
        <div className='p-12 max-w-[480px] w-full flex items-center justify-center bg-white'>
          <div className='m-auto max-w-[400px]'>
            <div className='mb-3 flex items-center'>
              <img src={Logo} alt="Logo" className='w-[90x] h-[70px] object-contain' />
              <h5 className='ml-2 text-gray-700 leading-none font-bold text-2xl '>Schedule</h5>
            </div>
            <h6 className='font-semibold text-gray-500 text-xl'>Welcome to Rang Dong</h6>
            <p className='mt-7 font-semibold text-gray-400'>Please sign-in to your account</p>
            <form action="" className='w-full mt-5'>
              <input type="text" className='w-full border h-[55px] border-gray-300 rounded-md p-2 outline-none' placeholder='Username' />
              <input type="text" className='w-full border h-[55px] border-gray-300 mt-5 rounded-md p-2 outline-none' placeholder='Password' />
              <div className='mb-4 flex items-center flex-wrap justify-between'>
                <label htmlFor="" className='inline-flex items-center cursor-pointer mt-5 gap-2'>
                  <span className='inline-flex items-center justify-center relative bg-transparent outline-0 p-[9px] rounded-md bg-gray-300'>
                    <input type="checkbox" name="" id="" className='absolute w-full h-full border-gray-300' />
                  </span>
                  <span className='text-sm text-gray-500'>Remember Me</span>
                </label>
                <a href="//" className='text-sm no-underline text-[#696cff] mt-3'>Forgot Password?</a>
              </div>
              <button className='w-full inline-flex items-center justify-center text-white bg-[#696cff] font-bold leading-3 rounded-lg py-4 text-[17px]'>Sign in</button>
              <div className='flex items-center flex-wrap justify-center gap-3 mt-3'>
                <p className='font-semibold text-sm text-gray-300'>New on our platform?</p>
                <p className='font-semibold text-gray-300'>
                  <a href="//" className='text-sm no-underline text-[#696cff]'>Create an account</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login