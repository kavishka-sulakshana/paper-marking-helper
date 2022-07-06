import React from 'react'
import { useState } from 'react'
import MarksBoard from './MarksBoard'
import MarksSearch from './MarksSearch'
import { storage } from '../../firebase/findex'

const MarksMain = () => {
    const [result, setResult] = useState()
    const [barcode, setBarcode] = useState(0)
    const [downUrl, setDownUrl] = useState('');


  return (
    <div className='flex bg-stone-300'>
        <div className='w-1/2 mx-auto my-12'>
            <div>
                <MarksSearch result={result} setResult={setResult} barcode={barcode} setBarcode={setBarcode} setDownUrl={setDownUrl}/>
            </div>

            <div className='my-8 '>
                Search your marks
            </div>

            <div className='my-8 '>
                {result && <MarksBoard result={result} downUrl={downUrl}/>}
            </div>
        </div>
    </div>
  )
}

export default MarksMain