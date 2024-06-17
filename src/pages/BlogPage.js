import React, { useContext, useEffect } from 'react'
import {useNavigation,useLocation} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';
import Header from '../Components/Header';
import { BlogDetails } from '../Components/BlogDetails';
import { baseUrl } from '../baseUrl';


export const BlogPage = () => {
    const[blog,setBlog]=useState(null);
    const[relatedblogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const navigation=useNavigation();
    const {setLoading,loading}=useContext(AppContext);

    const blogId=location.pathname.split("/").at(-1);
    
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url=`${baseUrl}?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data=await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        }
        catch(error){
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

  return (
    <div>
        <Header></Header>
        <div>
            <button onClick={()=>navigation(-1)}>Back</button>
        </div>
        {
            loading?<p>Loading</p>:
            blog?(<div>
                <BlogDetails post={blog}></BlogDetails>
                <h2>Related Blogs</h2>
                {
                    relatedblogs.map((post)=>(
                        <div key={post.id}>
                            <BlogDetails post={post}></BlogDetails>
                        </div>
                    ))
                }
            </div>):
            (<p>No Blog Found</p>)
        }
    </div>
  )
}
export default BlogPage
