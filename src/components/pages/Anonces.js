import React from 'react'

import toyotaLandCruiser from '../imgs/toyotaLandCruiser.jpg';

export default function Anonces() {
  return (
    <div className='max-w-[1540px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>anonce</h3>
            <img src={toyotaLandCruiser} alt='anonce' className='w-full h-full object-cover relative border-white border-2  shadow-lg'/>
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>anonce</h3>
            <img src={toyotaLandCruiser} alt='anonce' className='w-full h-full object-cover relative border-white border-2  shadow-lg'/>
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>anonce</h3>
            <img src={toyotaLandCruiser} alt='anonce' className='w-full h-full object-cover relative border-white border-2  shadow-lg'/>
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>anonce</h3>
            <img src={toyotaLandCruiser} alt='anonce' className='w-full h-full object-cover relative border-white border-2  shadow-lg'/>
        </div>
    </div>
  )
}
