import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import { BlogDetails } from '../Components/BlogDetails';


export const Blogs = () => {
  //consume
  const {loading,posts}=useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7 mt-[65px] mb-[70px] justify-center items-center'>
      {
        loading?
        (<Spinner></Spinner>):
        (
          posts.length===0?
        (<div>
          <p>No Post Found</p>
        </div>):(posts.map((post)=>(
          <BlogDetails key={post.id} post={post}></BlogDetails>
        )))
        )
      }
    </div>
  )
}

export default Blogs;