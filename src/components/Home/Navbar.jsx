import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between px-4 bg-zinc-900 text-white">
            <div className="flex justify-around">
              <Link to='/'><div className='px-2 py-3 mx-2 hover:text-yellow-300 cursor-pointer'>Home</div></Link>
              {/* <a><div className='px-2 py-3 mx-2 hover:text-orange-300 cursor-pointer'>Marks</div></a>
              <a><div className='px-2 py-3 mx-2 hover:text-red-300 cursor-pointer'>Upload Paper</div></a> */}
            </div>
            <div className="flex">
              <a><div className='px-2 py-3 mx-2 hover:text-orange-300 cursor-pointer'>Login</div></a>
              {/* <a><div className='px-2 py-3 mx-2 hover:text-red-300 cursor-pointer'>Register</div></a> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar