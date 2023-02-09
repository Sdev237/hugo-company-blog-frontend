import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div>
      <div className='flex justify-between items-center px-2 py-2 nav1'>
        <div flex items-center>
          <div className='text-xl font-bold text-gray-700'>logologo</div>
        </div>
        <div className='flex info'>
          <div className='flex items-center px-6'>
            <p><AiOutlineClockCircle/></p>
            <p className='text-sm text-gray-700'>08AM - 6PM</p>
          </div>
          <div className='flex items-center px-6'>
            <p><AiFillPhone/></p>
            <p className='text-sm text-gray-700'>(+237) 675 016 111 / 677 269 321</p>
          </div>
        </div>
      </div>
      <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white px-4 bg-gray-700/80 shadow-md shadow-black'>
      
        <a href='' className='logo text-xl p-3 font-bold z-10 text-orange'>HUGO <span className='logo-d'>COMPANY</span></a>
        
        {/*desktop nav */}
        <nav className='hidden sm:flex px-4 '>
          <ul className='flex'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
            <li>
              <a href='#' >About</a>
            </li>
            <li>
              <a href=''>Projets</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </nav>
      
        {/*mobile nav */}

        <nav className={!toggle 
                          ? 'mobile-navBar h-creen absolute left-[-100%]'
                          : 'mobile-navBar  h-creen absolute fixed left-0 '
                      }>
          <ul className='h-full w-full text-center nav-mobileList'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <a href=''>Blog</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Projets</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </nav>

        {/**togle menu */}
        
        <div  onClick={handleToggle} className='sm:hidden z-10'>
          { !toggle ? <AiOutlineMenu size={20} className='mr-4 z-10 cursor-pointer'/> 
          : <AiOutlineClose size={20} className='mr-4 z-10 cursor-pointer'/>}
        </div>

      </div>
    </div>
  )
}
