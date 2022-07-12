import React from 'react'
import PaperList from './PaperList'

const Main = () => {
  return (
    <div>
        <div className='py-8 bg-blue-100'>
            <div className='flex flex-col w-1/2 mx-auto p-4 rounded bg-gray-100'>
                <div className='flex justify-around rounded mx-3 items-center mb-4 bg-slate-200 p-3'>
                    <div className='text-lg'>
                        <select>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                    </div>
                    <button type='button' className='bg-green-700 text-white px-5 py-1 rounded'>
                        Search
                    </button>
                </div>
                <PaperList />
            </div>
        </div>
    </div>
  )
}

export default Main