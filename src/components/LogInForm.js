import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
function LogInForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
      setIsLoggedIn(true);
      toast.success("Sign up Successful");
      navigate("/dashboard");
      let data={
        ...formData
      }
      console.log(data);
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      {/* Email Field */}
      <label className="w-full">
        <p className="text-[0.875rem] text-[#ced2d9] mb-1 leading-[1.35rem]">
          Email Address <sup className="text-[#f50505]">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          name="email"
          className="text-[0.875rem] text-black w-full rounded-[0.5rem] p-[10px]"
        />
      </label>

      {/* Password Field */}
      <label className="w-full relative">
        <p className="text-[0.875rem] text-[#ced2d9] mb-1 leading-[1.35rem]">
          Password <sup className="text-[#f50505]">*</sup>
        </p>
        <div>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter your password"
            name="password"
            className="text-[0.875rem] text-back w-full rounded-[0.5rem]  p-[10px]"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[35px] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEye fontSize={24} fill="#5c6e6a" />
            ) : (
              <AiOutlineEyeInvisible fontSize={24} fill="#5c6e6a" />
            )}
          </span>
        </div>
        <Link to="#">
          <p className="text-xs text-[#0a5fc7] mt-1 max-w-max ml-auto">
            Forgot Password?
          </p>
        </Link>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-yellow-500 rounded-[8px] font-medium text-black-500 px-[12px] py-[8px]"
      >
        Sign In
      </button>
    </form>
  );
}


export default LogInForm;
