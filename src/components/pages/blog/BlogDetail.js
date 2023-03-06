import React from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api';

const BlogDetail = () => {
    const {id} = useParams();
    const {data: post,isLoading,error} = Api('http://127.0.0.1:8000/api/front/detail-Posts/'+6);
    
    return (
        <div>
            {isLoading && <div>{console.log(id)}En cour de traitement...</div>}
            {error && <div>{error}</div>}
            {post && (
                <section className="mx-auto max-w-7xl" id='blog'>
                    <div className="pt-5 pb-4">
                        <div className='px-6 sm:px-8 md:px-12 py-5 mt-4 grid grid-cols-1 gap-1  text-center' >
                            <div className="p-4 border-2  m-4  shadow-md  ">
                                <img src={post.image} alt={post.name}/>
                            </div>
                            <div className=" ">
                                <div className="p-4 font-bold text-xl md:text-2xl leading-relaxed">
                                    {post.title}
                                </div>
                                <small className="text-sm text-orange-400">Publie le: {post.created_at}</small>
                                <div className="p-4 text-sm leading-loose text-left">
                                    {post.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default BlogDetail;
