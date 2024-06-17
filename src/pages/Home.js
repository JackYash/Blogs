import React from 'react'
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

export const Home = () => {
  return (
    <div>
        <Header></Header>
        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}
export default Home;
