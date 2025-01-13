import React from 'react'
import Template from '../components/Template'
import SignupImg from '../assest/signup.png'
function SignUp({setIsLoggedIn}) {
  return (
    <Template
    title="Create a new account"
    desc1= "Build skills for today, tomorrow, and beyond."
    desc2= "Education to future-proof your career"
    image={SignupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
  />
  ) 
}

export default SignUp