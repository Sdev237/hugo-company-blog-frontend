import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import {BschatSquareDots} from 'react-icons/bs';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <div className='flex justify-between items-center px-4 py-2 nav1'>
            <div flex items-center>
              <div className='text-xl font-bold text-gray-700'>logo</div>
            </div>
            <div className='flex'>
              <div className='flex items-center px-6'>
                <AiOutlineClockCircle/>
                <p className='text-sm text-gray-700'>08AM - 6PM</p>
              </div>
              <div className='flex items-center px-6'>
                <AiFillPhone/>
                <p className='text-sm text-gray-700'>(+237) 675 016 111 / 677 269 321</p>
              </div>
            </div>
          </div>
      <div className='navBar flex text-white justify-between px-5 py-2 bg-gray-900 border-b-2 border-b-white'>
        
        <a href='' className='logo text-2xl font-bold text-orange'>HUGO <span className='logo-d'>COMPANY</span></a>
        
        <div>

          {/*desktop nav */}
          <nav className='hidden md:block desk-nav'>
            <ul className='flex'>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>About</a>
              </li>
              <li>
                <a href=''>Projets</a>
              </li>
              <li>
                <a href=''>Blog</a>
              </li>
              <li>
                <a href=''>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/*mobile nav */}
        <nav className={!toggle 
                            ? 'mobile-navBar left-[-100%]'
                            : 'mobile-navBar fixed left-0 '
                        } id='nav-mob'>
          <ul className='flex flex-col nav-mobileList'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Projets</a>
            </li>
            <li>
              <a href=''>Blog</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </nav>

        {/**togle menu */}
        <button onClick={handleToggle} className='block md:hidden'>
          {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
        </button>
      </div>
    </>
  )
}
