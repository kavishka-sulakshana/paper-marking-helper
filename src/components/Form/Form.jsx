import React from 'react'
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { async } from '@firebase/util';
import { Database } from '../../firebase/findex';

const Form = () => {

    const [code,setCode] = useState(0);
    const [name,setName] = useState('');
    const [school,setSchool] = useState('');
    const [pdf,setPdf] = useState();

    const submitForm = async (e) =>  {
        e.preventDefault();
        if(code != 0 && name != '' && school != ''){
            try{
                const docRef = await addDoc(collection(Database, "students"),{
                    barcode : {code},
                    name : `${name}`,
                    school : `${school}`
                });
                console.log("Done");
            }catch(E){
                console.log(E);
            }
        }
        else{
            
        }

    }

    const clearForm = () => {

    }

  return (
    <div className='bg-stone-400 py-8'>
        <form className='lg:w-1/3 md:w-1/2 sm:w-1/2 mx-auto py-4 px-8 flex flex-col border-2 rounded bg-stone-300'>
            <h1 className='text-center text-xl py-2 text-blue-800'>Upload your answer sheet</h1>
            <hr /><hr />
            <div>
                <div className='flex flex-col my-4'>
                    <label className='px-1'>Barcode Number : </label>
                    <input onChange={e => setCode( e.target.value)} 
                            value={code} 
                            className='py-1 px-2 bg-stone-100 border-gray-400 border-2 rounded' 
                            type="number" placeholder="Enter barcode number"/>
                </div>
                <div className='flex flex-col my-4'>
                    <label className='px-1'>Name : </label>
                    <input onChange={e => setName(e.target.value)} 
                            value={name} 
                            className='py-1 px-2 bg-stone-100 border-gray-400 border-2 rounded' 
                            type="text" 
                            placeholder="Enter your name"/>
                </div>
                <div className='flex flex-col my-4'>
                    <label className='px-1'>School : </label>
                    <input onChange={e => setSchool(e.target.value)} 
                            value={school} 
                            className='py-1 px-2 bg-stone-100 border-gray-400 border-2 rounded' 
                            type="text" 
                            placeholder="Enter your school"/>
                </div>
            </div>
            <div>
                <div className='flex flex-col my-4'>
                    <label className='px-1'>Answers PDF : </label>
                    <input onChange={e => setPdf(pdf, e.target.files[0])} className='py-1 px-2 border-gray-300 border-2 rounded' type="file" name="barcode"/>
                </div>
            </div>
            <div className='flex justify-around px-4 py-8'>
                <button onClick={submitForm} type="submit" className='active:scale-75 hover:bg-green-900 text-lg bg-green-700 px-4 py-1 text-white rounded'>Submit</button>
                <button onClick={clearForm} type="reset" className='active:scale-75 hover:bg-red-800 text-lg bg-red-600 px-4 py-1 text-white rounded'>Clear</button>
            </div>
        </form>
    </div>
  )
}

export default Form