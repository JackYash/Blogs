import React from 'react';
import Header from '../Components/Header';
import { useLocation,useNavigate} from 'react-router-dom';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

export const CategoryPage = () => {
    const naivgation =useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
    
  return (
    <div>
        <Header></Header>
        <div>
            <button onClick={()=>naivgation(-1)}>Back</button>
            <h2> Blogs On <span>{category}</span></h2>
        </div>
        <Blogs></Blogs>
        <Pagination></Pagination>

    </div>
  )
}
