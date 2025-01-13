import React from 'react'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import { toast, ToastContainer } from 'react-toastify';

function Home(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  let loading = props.loading;
  let courses = props.courses;
  return (
    <div className='justify-center items-center'>
        <div>
            <Filter filterData={filterData} category={category} setCategory={setCategory} /> 
       </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
            {loading ? <Spinner /> : <Cards courses={courses} category = {category}/>}
       </div>
       <ToastContainer/>
    </div>
  )
}

export default Home