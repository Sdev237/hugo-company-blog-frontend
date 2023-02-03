import React from 'react';
import toyotaRav4 from '../imgs/toyotaRav4.jpg';


export default function Index() {
  return (
    <div>
        <div className='w-full h-full h-[90vh]'>
            <img src={toyotaRav4} alt='image daccueil' className='w-full h-full object-cover'/>
            <div className='max-w-[1140px] m-auto '>
              <div className='absolute top-[30%] w-full md:-[50%] max-w-[700px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-3xl sm:text-5xl lg:text-6xl py-2'>HUGO COMPANY</h1>
                <p className='text-xl sm:text-2xl lg:text-3xl'>
                  Import-export  and sale of<br/>  new and original automobiles<br/> spare parts, vehicle transformation.
                </p>
                <h3 className='text-3xl sm:text-2xl lg:text-2xl py-4 '>"INNOVATION IS HERE"</h3>
              </div>
            </div>
        </div>
    </div>
  )
}
