import { query, doc, collection, where, limit, getDocs, getDoc } from 'firebase/firestore';
import { Database } from '../../firebase/findex';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const MarksSearch = ({result, barcode, setResult, setBarcode}) => {
  const colRef = collection(Database, "students" )
  const [q, setQ] = useState() 

  useEffect(()=>{
    setQ(q => query(colRef, where("barcode", "==", barcode), limit(1)))
  },
  [barcode])

  const findMarks = async(e) => {
    e.preventDefault();
    console.log(barcode)
    if(q){
      const snap = await getDocs(q)
      snap.forEach(async(doc) => {
        await setResult(result => doc.data())
      });
    }
  }

  return (
    <div>
        <form>
            <div className='flex justify-center'>
                <input 
                    type="number" 
                    placeholder='Enter Barcode number' 
                    className='mx-4 px-2 border-2 rounded-md border-gray-500 text-lg'
                    onChange={e => setBarcode(e.target.value)} 
                    value = {barcode}/>

                <button type="submit" 
                        className='py-1 px-2 bg-blue-700 border-blue-800 border-2 rounded text-white'
                        onClick={findMarks} >
                  Search
                </button>

            </div>
        </form>
    </div>
  )
}

export default MarksSearch