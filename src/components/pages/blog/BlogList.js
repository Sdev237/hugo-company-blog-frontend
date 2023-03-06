// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Api from '../../api';

export default function BlogList() { 

  const {data: posts, isLoding} = Api('http://127.0.0.1:8000/api/front/posts/?offset=0&limit=1/');
 
  return (
    <section className="pt-6  mx-auto max-w-7xl blogs">
      {isLoding && <div className='text-orange-400 text-center'>Blog list is loading...</div>}
      
      {posts && (
        <div className=" md:px-5 lg:px-12  grid grid-cols-1 lg:grid-cols-2 gap-2">
        {
          posts.map((blog)=>(
            <div className='p-4 sm:px-6 md:px-8 lg:px-5 py-5 grid grid-cols-1 sm:flex-col sm:grid-cols-2 md:flex-col md:grid-cols-2 lg:grid-cols-2 gap-2  text-center items' key={blog.id}>
              <div className="h-60 lg:w-40 border-2 border-black my-4 img">
                  <img src={blog.image} alt={blog.name}/>
              </div>
              <div className=" ">
                <div className="p-4 font-bold text-xl md:text-2xl leading-relaxed">
                  <h1>{blog.title}</h1>
                </div>
                <small className="text-sm text-orange-400">Publie le: {blog.created_at}</small>
                <div className="text-sm text-left leading-loose desc">
                  <p>{blog.description}</p>
                </div>
                <Link to={`/detail-Posts`} className=' mx-6 px-4 border border-orange-400 text-orange-400'>View more</Link>
              </div>
            </div>
          ))
                        
         }
        </div>
      )}
    </section>
  )
}
