import React from 'react'

const PaperList = () => {
    return (
        <div>
            <div className='flex justify-end p-4 mx-4 list'>
                <div className=''>
                    <button type='button' className='bg-gray-900 text-purple-100 py-1 px-3 rounded hover:bg-yellow-700'>Download All</button>
                </div>
            </div>
            <div className='flex justify-between p-2 mx-4 list'>
                <div className='flex-1'>123345</div>
                <div className='flex-1'>
                    <button type='button' className='bg-gray-200 text-blue-900 py-1 px-3 rounded hover:bg-blue-400'>Download</button>
                </div>
                <div className=''>
                    <button type='button' className='bg-gray-200 text-purple-900 py-1 px-3 rounded hover:bg-purple-400'>Upload</button>
                </div>
            </div>
            <div className='flex justify-between p-2 mx-4 list'>
                <div className='flex-1'>787484</div>
                <div className='flex-1'>
                    <button type='button' className='bg-gray-200 text-blue-900 py-1 px-3 rounded hover:bg-blue-400'>Download</button>
                </div>
                <div className=''>
                    <button type='button' className='bg-gray-200 text-purple-900 py-1 px-3 rounded hover:bg-purple-400'>Upload</button>
                </div>
            </div>
            <div className='flex justify-between p-2 mx-4 list'>
                <div className='flex-1'>998494</div>
                <div className='flex-1'>
                    <button type='button' className='bg-gray-200 text-blue-900 py-1 px-3 rounded hover:bg-blue-400'>Download</button>
                </div>
                <div className=''>
                    <button type='button' className='bg-gray-200 text-purple-900 py-1 px-3 rounded hover:bg-purple-400'>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default PaperList