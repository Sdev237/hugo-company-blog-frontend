import React from 'react'

export default function About() {
  return (
    <section className='py-20 mx-8 text-center'>
        <div className=" mx-auto px-8 max-w-7xl py-10 sm:py-6  shadow-md shadow-gray-600">
            <h2 className="text-2xl font-semibold md:text-3xl">About</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                <div className="grid1-item">
                    <span className="bg-orange-200 ring-orange-100 ">
                        <span className=" ">1</span>
                    </span>
                    <h3 className=" ">Tranform</h3>
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                
                <div className="grid1-item">
                    <span className="bg-orange-200 ring-orange-400 ">
                        <span className=" ">2</span>
                    </span>
                    <h3 className=" ">Tranform</h3>
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                
                <div className="grid1-item">
                    <span className="bg-orange-200 ring-orange-100 ">
                        <span className=" ">3</span>
                    </span>
                    <h3 className=" ">Tranform</h3>
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                
                <div className="grid1-item">
                    <span className="bg-orange-200 ring-orange-100  ">
                        <span className=" ">4</span>
                    </span>
                    
                    <h3 className=" ">Tranform</h3>
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
        </div>
    </section>
  )
}
