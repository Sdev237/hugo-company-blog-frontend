import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className='flex text-white justify-between px-5 py-2 bg-gray-900'>
      <a href='' className='logo text-2xl font-bold'>HUGO COMPANY</a>
      
      {/*desktop nav */}
      <nav className='hidden md:block '>
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
      
      {/*mobile nav */}
      <nav className={!toggle 
                          ? 'mobile-navBar left-[-100%]'
                          : 'mobile-navBar fixed left-0 '
                       }>
        <ul className='flex flex-col '>
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
    </header>
  )
}
