import { query, doc, collection, where, limit, getDocs, getDoc } from 'firebase/firestore';
import { Database, storage } from '../../firebase/findex';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';

const MarksSearch = ({result, barcode, setResult, setBarcode, setDownUrl}) => {
  const colRef = collection(Database, "students" )
  const [q, setQ] = useState()
  
  const markedRef = ref(storage,'Not_Marked');

  useEffect(()=>{
    setQ(q => query(colRef, where("barcode", "==", barcode), limit(1)))
  },
  [barcode])

  const findMarks = async(e) => {
    e.preventDefault();
    setDownUrl('');
    console.log(barcode)
    if(q){
      const snap = await getDocs(q)
      snap.forEach(async(doc) => {
        await setResult(result => doc.data())
      });
      getDownloadURL(ref(markedRef, `${barcode}.pdf`))
      .then(url=>setDownUrl(url))
      .catch(err=>setDownUrl('error'))
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