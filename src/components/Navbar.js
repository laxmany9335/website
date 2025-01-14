import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assest/Logo.svg"
import {toast} from "react-hot-toast" 
function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsloggedIn = props.setIsloggedIn;

  return (
    <div className='flex flex-wrap justify-around bg-[#152561] text-xl pt-3 pb-3 text-white'>
          <Link to = "/" className='pb-3'>
               <img src= {logo} alt='Logo' width={160} height={32} loading='lazy' />
          </Link>

          <nav>
              
              <ul className='flex gap-x-6 pb-3'>
                 <li className='hover:text-[#38BDF8] ml-3 ' >
                   <Link to = "/" > Home</Link>
                 </li>
                 <li className='hover:text-[#38BDF8] gap-3'>
                   <Link to = "/about" > About</Link>
                 </li>
                 <li className='hover:text-[#38BDF8] gap-3'>
                   <Link to = "/contact" > Contact</Link>
                 </li>
              </ul>
          </nav>

          <div className='flex items-center gap-x-4'>

                   { !isLoggedIn &&
                    <Link to = "/login">
                      <button className="bg-white hover:bg-[#008CBA] hover:bg-opacity-60 text-black text-xl hover:text-white px-2 text-center rounded-3xl border-2">                        Login
                      </button>
                    </Link>
                   }

                    { !isLoggedIn &&
                    <Link to = "/signup"> 
                    <button className="bg-white hover:bg-[#008CBA] hover:bg-opacity-60 text-black text-xl hover:text-white px-2 text-center rounded-3xl border-2">
                      Sign up
                    </button>
                    </Link>
                   }

                    { isLoggedIn &&
                    <Link to = "/">
                       <button className="bg-white hover:bg-[#008CBA] hover:bg-opacity-60 text-black text-xl hover:text-white px-2 text-center rounded-3xl border-2" onClick={()=>{
                          setIsloggedIn(false);
                          toast.success("Logged Out")
                          }}>
                          Log Out
                      </button>
                    </Link>
                   }
                   
                   { isLoggedIn &&
                    <Link to = "/dashboard">
                      <button className="bg-white hover:bg-[#008CBA] hover:bg-opacity-60 text-black text-xl hover:text-white px-2 text-center rounded-3xl border-2">
                         Dashboard
                      </button>
                    </Link>
                   }

               </div>
    </div>
  )
}

export default Navbar