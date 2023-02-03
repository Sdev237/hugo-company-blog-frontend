import React from 'react';
import toyotaRav4 from '../imgs/toyotaRav4.jpg';


export default function Index() {
  return (
    <div>
        <div className='w-full h-full h-[90vh]'>
            <img src={toyotaRav4} alt='image daccueil' className='w-full h-full object-cover'/>
            <div className='max-w-[1140px] m-auto '>
              <div className='absolute top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-3xl sm:text-5xl lg:text-6xl'>HUGO COMPANY</h1>
                <h3 className='text-3xl sm:text-4xl lg:text-5xl py-4 italic'>INNOVATION IS HERE</h3>
                <p className='text-xl sm:text-2xl lg:text-3xl'>
                  Import-export company and sale of new and original spare parts for automobiles, vehicle transformation.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}
