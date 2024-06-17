import React from 'react';
import Header from '../Components/Header';
import { useLocation,useNavigation } from 'react-router-dom';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

export const TagPage = () => {
    const naivgation =useNavigation();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
  return (
    <div>
        <Header></Header>
        <div>
            <button onClick={()=> naivgation(-1)}>Back</button>
            <h2>Blogs Tagged<span>#{tag}</span></h2>
        </div>
        <Blogs> </Blogs>
        <Pagination></Pagination>
    </div>
  )
}

export default TagPage;