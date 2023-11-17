"use client"
import React from 'react'
import { useState } from 'react';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

   
  fetch('https://assignment-api-spxd.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert('Login successful');
          // Navigate("/dashboard");
          return res.json();
        } else {
      alert('Username or Password is incorrect') ;
          return
        }
      })
      .then((data) => {
        
   
      
        sessionStorage.setItem('email', data.email);
       
      
      })
     
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (

    <div className="grid grid-cols-1  h-screen w-full" >
    <div className="bg-gray-200 flex-col justify-center h-30">
        <form onSubmit={handleSubmit} id="userLogin" className="max-w-[400px] w-full mx-auto mt-20 bg-gray-500 p-8 px-8 rounded-lg">
            <h2  className="text-4xl dark:text-white font-bold text-center">Sign In</h2>
            <div className=" flex flex-col text-gray-900 py-y">
                <label>Username</label>
                <input  className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' required type='text'
                  id="username"
                  name="username"
                value={username}
                 onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className=" flex flex-col text-gray-400 py-y">
                <label>Password</label>
                <input 
className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
required 
type='password'
id="password"
name="password"
value={password}
onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <div className="flex justify-between text-gray-400 py-2">
                <p>Forgot Password?</p>
            </div>
            <button type="submit" className="w-full my-5 bg-teal-500 shadow-lg hover:blue text-white-700 font-semibold rounded-lg">Sign In</button>
        </form>
    </div>

</div>
  )
}

export default login