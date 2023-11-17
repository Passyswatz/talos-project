'use client'


import { useState } from 'react';


const register = () => {
  const [username, setUsername] = useState('');
 
  const [password, setPassword] = useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://assignment-api-spxd.onrender.com/api/register", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((res) => {
        if (res.status === 201) {
          alert('Registration successful');
          // Navigate("/login");
          res.json().then((result) => {
            console.log(result);
          });
        } else {
          alert(' username is already registered. Please login or provide valid user information.');
          return;
        }
      });
  };

  
  return (
   
<div className="grid grid-cols-1 h-screen w-full">
  <div className="bg-gray-200 flex-col md:flex-2 justify-center h-30">
    <form id='userRegister' onSubmit={handleSubmit} className="max-w-[600px] w-full mx-auto mt-20 bg-gray-500 p-8 px-8 rounded-lg">
      <h2 className="text-4xl dark:text-white font-bold text-center">Sign Up</h2>
      <div className="grid grid-cols-1 sm:flex-col md:grid-cols-2 gap-4">
      <div className="flex flex-col text-gray-400 py-2">
        <label >Username</label>
        <input
          className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
          id="username"
          name="username"
          placeholder="Enter username"
          required
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      </div>
      <div className="grid grid-cols-1 sm:flex-col md:grid-cols-2 gap-4">
       
        
        
      </div>
     
      <div className="grid grid-cols-1 sm:flex-col md:grid-cols-2 gap-4">
      <div className="flex flex-col text-gray-400 py-2">
        <label >Password</label>
        <input
          className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
          id="password"
          name="password"
          placeholder="Enter password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      </div>
      <div className="flex justify-between text-gray-400 py-2">
        <p>Already have an account?</p>
      </div>
      <button  type='submit' className="w-full my-5 bg-teal-500 shadow-lg hover:blue text-white-700 font-semibold rounded-lg">
        Sign Up
      </button>
    </form>
  </div>
</div>
  )
}

export default register