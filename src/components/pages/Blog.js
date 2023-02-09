import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from './BlogList'

export default function Blog() {
  return (
    <section className=" bg-gray-100 mx-auto max-w-7xl" id='blog'>
      <div className="pt-5 pb-4">
        <div className='px-6 sm:px-8 md:px-12 py-5 grid grid-cols-1 sm:grid-cols-2 gap-2  text-center'>
          <div className="p-4 border-2 border-black m-4">
              img
          </div>
          <div className=" ">
            <div className="p-4 font-bold text-xl md:text-2xl leading-relaxed">
              title
            </div>
            <div className="p-4 text-sm leading-loose ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, numquam quia? Quisquam molestias amet iusto soluta sint fuga rerum commodi ipsam, molestiae ut ipsa aspernatur voluptates facilis, a accusamus dicta.
              Illum nobis officiis dignissimos rem nihil. Architecto vitae corporis error nemo nisi molestias quis, sit voluptatem, perspiciatis mollitia porro soluta dolores, voluptate accusantium iusto odio! Architecto earum adipisci dicta rerum.
            </div>
            <Link to={'#'} className=' mx-6 px-4 border border-orange-400 text-orange-400'>View more</Link>
          </div>
        </div>
        <div className='px-6 sm:px-8 md:px-12 py-5 grid grid-cols-1 sm:grid-cols-2 gap-2  text-center'>
          <div className="p-4 border-2 border-black m-4">
              img
          </div>
          <div className=" ">
            <div className="p-4 font-bold text-xl md:text-2xl leading-relaxed">
              title
            </div>
            <div className="p-4 text-sm leading-loose ">
              Illum nobis officiis dignissimos rem nihil. Architecto vitae corporis error nemo nisi molestias quis, sit voluptatem, perspiciatis mollitia porro soluta dolores, voluptate accusantium iusto odio! Architecto earum adipisci dicta rerum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, numquam quia? Quisquam molestias amet iusto soluta sint fuga rerum commodi ipsam, molestiae ut ipsa aspernatur voluptates facilis, a accusamus dicta.
              sit amet consectetur adipisicing elit. Doloremque, numquam quia? Quisquam molestias amet iusto soluta sint fuga rerum commodi ipsam, molestiae ut ipsa aspernatur voluptates facilis, a accusamus dicta.
            </div>
            <Link to={'#'} className=' mx-6 px-4 border border-orange-400 text-orange-400'>View more</Link>
          </div>
        </div>
        <Link to={'/blog'} className='px-6 sm:px-8 md:px-16 py-6 text-orange-400'>Go to blog page</Link>
      </div>
    </section>
  )
}
