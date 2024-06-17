import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext';
import "./App.css";
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import { CategoryPage } from './pages/CategoryPage';


export const App = () => {  
  const {fetchBlogPosts}=useContext(AppContext);
  const[searchParams,setSearch]=useSearchParams();
  const location=useLocation();
  useEffect(()=>{
    const page=searchParams.get("page")??1;
    if(location.pathname.includes("tags")){
      //iska mtlb tag wla page show krna hai
      const tag=location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]);
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog/:blogId' element={<BlogPage></BlogPage>}></Route>
      <Route path='/tags/:tag' element={<TagPage></TagPage>}></Route>
      <Route path='/category/:category' element={<CategoryPage></CategoryPage>}></Route>
    </Routes>
  )
}

export default App;