import React from 'react'

const Markers = () => {
  return (
    <div className='pb-4 bg-gray-400'>
        <div className='flex flex-col w-1/2 mx-auto p-4 rounded bg-gray-100'>
            <div className='flex justify-between rounded mx-3 items-center mb-4 bg-slate-200 p-3'>
                <div className='text-lg'>
                    Select from the list
                </div>
                <button type='button' className='bg-green-700 text-white px-5 py-1 rounded'>
                    save
                </button>
            </div>
            <div>
                <div className='flex justify-between p-2 mx-4 list'>
                    <div className='flex-1'>Gampaha</div>
                    <div className='flex-1'>
                        <select>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                    </div>
                    <input type="checkbox" className='check'/>
                </div>
                <div className='flex justify-between p-2 mx-4 list'>
                    <div className='flex-1'>Veyangoda</div>
                    <div className='flex-1'>
                        <select>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                    </div>
                    <input  type="checkbox" className=' check'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Markers