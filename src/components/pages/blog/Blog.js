import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog =({posts})=> {
  return (
    <section className=" bg-gray-100 mx-auto max-w-7xl" id='blog'>
      <div className="py-4 text-center text-orange-600"><h1 className="font-bold text-2xl">Blog</h1></div>
      <div className="pt-2 pb-4">
        {
          posts.map((blog)=>(
            <div className='px-6 sm:px-8 md:px-12 py-5 grid grid-cols-1 sm:grid-cols-2 gap-2  text-center' key={blog.id}>
              <div className="border-2 border-orange-300 m-4 img">
                  <img className='img' src={blog.image} alt={blog.name}/>
              </div>
              <div className="">
                <div className="p-4 font-bold text-xl md:text-2xl leading-relaxed">
                  {blog.title}
                </div>
                <small className="text-sm text-orange-400">Publie le: {blog.created_at}</small>
                <div className="p-4 text-sm leading-loose desc">
                  <p>{blog.description}</p>
                </div>
                <Link to={`/detail-Posts/${blog.id}`} className=' mx-6 px-4 border border-orange-400 text-orange-400'>View more</Link>
              </div>
            </div>
          ))
                        
         }
        <Link to={'/blog'} className='px-6 sm:px-8 md:px-16 py-6 text-orange-400'>Go to blog page</Link>
      </div>
    </section>
  )
}
export default Blog;
