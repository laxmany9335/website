import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "india",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Final Form Data Submitted:");
    console.log(formData);
  }

  return (
    <div className="App p-4 bg-gray-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="m-8 border border-gray-300 rounded-md p-6 bg-white shadow-lg max-w-lg w-full space-y-6"
      >
        <legend className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Course registration Form
        </legend>

        <div>
          <label htmlFor="firstName" className="block text-left font-medium">
            First Name:
          </label>
          <input
            type="text"
            value={formData.firstName}
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            onChange={changeHandler}
            className="block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-left font-medium">
            Last Name:
          </label>
          <input
            type="text"
            value={formData.lastName}
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            onChange={changeHandler}
            className="block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-left font-medium">
            Email:
          </label>
          <input
            type="email"
            value={formData.email}
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={changeHandler}
            className="block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-left font-medium">
            Select Country:
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="usa">U.S.A</option>
            <option value="china">China</option>
            <option value="russia">Russia</option>
            <option value="uae">UAE</option>
          </select>
        </div>

        <div>
          <label htmlFor="address" className="block text-left font-medium">
            Street Address:
          </label>
          <input
            type="text"
            value={formData.address}
            name="address"
            id="address"
            placeholder="Enter your address"
            onChange={changeHandler}
            className="block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-left font-medium">
            City:
          </label>
          <input
            type="text"
            value={formData.city}
            name="city"
            id="city"
            placeholder="Enter your city"
            onChange={changeHandler}
            className="block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-left font-medium">
            State:
          </label>
          <input
            type="text"
            value={formData.state}
            name="state"
            id="state"
            placeholder="Enter your state"
            onChange={changeHandler}
            className="block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="zip" className="block text-left font-medium">
            ZIP/Postal Code:
          </label>
          <input
            type="text"
            value={formData.zip}
            name="zip"
            id="zip"
            placeholder="Enter your zip code"
            onChange={changeHandler}
            className="block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <fieldset className="border border-gray-300 rounded-md p-4">
          <legend className="text-left font-medium">By Email</legend>
          {["comments", "candidates", "offers"].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={item}
                id={item}
                checked={formData[item]}
                onChange={changeHandler}
                className="h-4 w-4 -mt-5"
              />
             
              <div className="flex flex-col">
                  <label htmlFor={item} className="text-left font-medium">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </label>
                  <p>this is Notifications</p>
              </div>

            </div>
          ))}
        </fieldset>

        <fieldset className="border border-gray-300 rounded-md p-4">
          <legend className="text-left font-medium">Push Notifications</legend>
          <p className="text-left">Delivered via SMS to your mobile phone</p>
          {["Everything", "Same as Email", "No Push Notifications"].map((value) => (
            <div key={value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="pushNotification"
                value={value}
                id={value}
                checked={formData.pushNotification === value}
                onChange={changeHandler}
                className="h-4 w-4"
              />
              <label htmlFor={value} className="text-left font-medium">
                {value}
              </label>
            </div>
          ))}
        </fieldset>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
