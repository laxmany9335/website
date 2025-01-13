import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./page/Home"
import Login from './page/Login';
import SignUp from './page/SignUp'
import Dashboard from './page/Dashboard';
import React, { useState, useEffect } from 'react';
import { filterData, apiUrl } from './page/data';
import { toast, ToastContainer } from 'react-toastify';
import Contact from './page/Contact';

function App() {
  const [loading, setLoader] = useState(true);
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState(filterData[0].title); 
  async function fetchData() {
    setLoader(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong"); // Display error notification
    }
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <div className=" flex flex-col ">
        <Navbar isLoggedIn = {isLoggedIn} setIsloggedIn = {setIsloggedIn} />
      
        <Routes>


           <Route path = "/"  element = {<Home filterData = {filterData} 
            courses={courses} category={category} setCategory={setCategory}
            loading = {loading} 
            /> }/>
          <Route path ="/contact" element ={<Contact/>}/>

           <Route path = "/login"  element = {<Login setIsLoggedIn={setIsloggedIn}/>} />
           <Route path = "/signup" element = {<SignUp setIsLoggedIn={setIsloggedIn}/>} />
           <Route path = "/dashboard" element = {<Dashboard/>} />
        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
