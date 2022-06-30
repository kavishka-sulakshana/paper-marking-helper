import React from 'react'
import MarksSearch from './MarksSearch'

const MarksMain = () => {
  return (
    <div className='flex bg-stone-300'>
        <div className='w-1/2 mx-auto my-12'>
            <div>
                <MarksSearch/>
            </div>

            <div className='my-8 '>
                Search your marks
            </div>
            
        </div>
    </div>
  )
}

export default MarksMain