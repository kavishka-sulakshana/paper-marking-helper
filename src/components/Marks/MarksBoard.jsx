import React from 'react'

const MarksBoard = ({result}) => {
  return (
    <div>
        <div className='rounded p-4 m-2 border-2 flex flex-col bg-stone-200'>
            <div className='flex'>
                <div className='w-28 h-28 bg-black mx-3 rounded'>
                    
                </div>
                <div className='mx-8 flex flex-col justify-center'>
                    <label className='py-2'>Barcode : {(result)?result.barcode:"barcode"}</label>
                    <label className='py-2'>Name : {(result)?result.name:"name"}</label>
                    <label className='py-2'>School : {(result)?result.school:"school"}</label>
                </div>
            </div>
            <div className='px-3 pt-4 pb-4 '>
                <div className='flex justify-between px-4 py-2 m-1 bg-stone-700 rounded text-teal-50'>
                    <div>Combined maths</div>
                    <div className='text-green-200'>80%</div>
                    <div className='text-blue-300 cursor-pointer'>Download PDF</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MarksBoard