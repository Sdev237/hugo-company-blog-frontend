import React from 'react';
import toyotaRav4 from '../imgs/toyotaRav4.jpg';
import About from '../pages/About';
import Anonces from '../pages/Anonces';
import Blog from '../pages/blog/Blog';
import Api from '../api';

export default function Index() {
  
  const {data: posts, isLoding} = Api('http://127.0.0.1:8000/api/front/posts/?offset=0&limit=1/');
 
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
              <p className='text-xl sm:text-2xl lg:text-xl py-4 slogan'>"Innovation Is Here"</p>
            </div>
          </div>
      </div>
      <Anonces/>
      {posts && <Blog posts={posts} />}
      {isLoding && <div className='text-orange-400 text-center'>Blog list is loading...</div>}
      <About/>
    </div>
  )
}
