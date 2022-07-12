import React from 'react'
import './permission.css'

const Permissions = () => {
  return (
    <div className='pt-8 pb-3 bg-gray-400'>
        <div className='flex flex-col w-1/2 mx-auto p-4 rounded bg-gray-100'>
            <div className='flex justify-between rounded bg-slate-200 p-3 mx-3 items-center'>
                <div className='text-lg'>
                    Select from the list
                </div>
                <button type='button' className='bg-green-700 text-white px-5 py-1 rounded'>
                    save
                </button>
            </div>
            <div>
                <table className='mx-auto my-5 rounded'>
                    <tr>
                        <td></td>
                        <th>2024</th>
                        <th>2023</th>
                        <th>2022</th>
                    </tr>
                    <tr>
                        <td>Upload</td>
                        <th><input className='check' type="checkbox"/></th>
                        <th><input className='check' type="checkbox"/></th>
                        <th><input className='check' type="checkbox"/></th>
                    </tr>
                    <tr>
                        <td>Release Marks</td>
                        <th><input className='check' type="checkbox"/></th>
                        <th><input className='check' type="checkbox"/></th>
                        <th><input className='check' type="checkbox"/></th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Permissions