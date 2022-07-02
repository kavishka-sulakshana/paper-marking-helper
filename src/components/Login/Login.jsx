import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='bg-stone-400 py-8 '>
        <form className='lg:w-1/3 md:w-1/2 sm:w-1/2 mx-auto py-4 px-8 flex flex-col border-2 rounded bg-stone-300'>
            <h1 className='text-center text-xl py-2 text-blue-800'>Login Panel</h1>
            <hr /><hr />
            <div>
                <div className='flex flex-col my-4'>
                    <label className='px-1'>Username : </label>
                    <input  
                            value={username} 
                            className='py-1 px-2 bg-stone-100 border-gray-400 border-2 rounded' 
                            type="text" placeholder="Enter username"/>
                </div>
                <div className='flex flex-col my-4'>
                    <label className='px-1'>Password : </label>
                    <input  
                            value={password} 
                            className='py-1 px-2 bg-stone-100 border-gray-400 border-2 rounded' 
                            type="password" 
                            placeholder="Enter your password"/>
                </div>
            </div>
            <div className='flex justify-around px-4 py-8'>
                <button  type="submit" className='active:scale-75 hover:bg-green-900 text-lg bg-green-700 px-4 py-1 text-white rounded'>Login</button>
                <button  type="reset" className='active:scale-75 hover:bg-red-800 text-lg bg-red-600 px-4 py-1 text-white rounded'>Clear</button>
            </div>
        </form>        
    </div>
  )
}

export default Login