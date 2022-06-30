import React from 'react'

const MarksSearch = () => {
  return (
    <div>
        <form action="">
            <div className='flex justify-center'>
                <input type="number" className='mx-4 px-2 border-2 rounded-md border-gray-500 text-lg'/>
                <button type="submit" className='py-1 px-2 bg-blue-700 border-blue-800 border-2 rounded text-white'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default MarksSearch