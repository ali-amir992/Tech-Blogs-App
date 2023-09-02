import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'


const App = () => {

  const { fetchBlogData } = useContext(AppContext)

  useEffect(() => {
    fetchBlogData();
  }, [])


  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-y-1 '>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App