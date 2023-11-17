'use client'
import Link from 'next/link';

const Hero = () => {

    
  const signUp = () => {

  }

  
  const signIn = () => {

  }
  return (
    <div className="h-screen bg-gray-300  ">
      



<div className="pt-20 " >
      <h1 className='font-montserrat font-semibold pl-10  text-4xl  '>
          Welcome to <br/> <span className='text-blue-500'>Talosmart</span> <br/>we connect people from <br/>all part of the globe.
        </h1>
     
        <h2 className='font-montserrat font-semibold pl-10 text-4xl'>
          <span className='text-blue-500'>Sign up </span> on our mini social app today.
        </h2>
      </div>

        <div className='pt-20 flex justify-center text-black'>
              <ul className='  md:flex gap-8'>
                <li className="bg-[#C32C31] my-5 px-5 py-2 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-md"><Link href="/">Home</Link></li>
                <li className='bg-[#C32C31] my-5 px-5 py-2 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-md'><Link href="/register">Register</Link></li>
                <li className='bg-[#C32C31] my-5 px-5 py-2 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-md'><Link href="/login">Login</Link></li>
               

               
              </ul>
            </div>

   

    </div>
  )
}

export default Hero