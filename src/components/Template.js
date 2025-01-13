import React from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import frameImage from '../assest/frame.png'; // Ensure correct path and file extension
import { FcGoogle } from "react-icons/fc";
function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div className='flex w-11/12 max-w-[1160px] justify-between py-10 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px]' >
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.73rem]'>{title}</h1>
        <p className=' flex flex-col text-[1.125rem] leading-[1.624rem] mt-4 '>
          <span className='text-[#d8e2e6]'>{desc1}</span>
          <span className='text-[#22c9bc] italic'> {desc2} </span>
        </p>
        {formtype === "signup" ? <SignUpForm setIsLoggedIn ={setIsLoggedIn} /> : <LogInForm setIsLoggedIn = {setIsLoggedIn}/>}
        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='h-[1px] bg-[#cce8e6] w-full'></div>
          <p className='text-[#cce8e6] font-medium leading[1.345rem]'>
            OR
            </p>
          <div className='h-[1px] bg-[#cce8e6] w-full '></div>
        </div>
        <button className='flex w-full justify-center items-center font-medium text-[#cce8e6]
        border border-[#cce8e6] rounded-[8px] px-[12px] py-[8px] gap-x-2 mt-6'>
           <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>
 
      <div className='relative w-11/12 max-w-[450px]'>
        <img
          src={frameImage}
          alt="pattern"
          height={558}
          width={584}
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          height={558}
          width={490}
          loading="lazy"
          className="absolute -top-2 right-1"
        />
      </div>
    </div>
  );
}

export default Template;
