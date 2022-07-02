import React from 'react'
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable } from 'firebase/storage';
import { Database, storage } from '../../firebase/findex';
import ErrMessage from './ErrMessage';

const Form = () => {

    const [code, setCode] = useState(0);
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [pdf, setPdf] = useState();
    const [err, setErr] = useState({
        errName : "",
        errType : ""
    });
    const [barProgress, setBarProgress] = useState(0);

    const notMarkedRef = ref(storage, 'Not_Marked');

    const submitForm = async (e) => {
        e.preventDefault();
        if (code != 0 && name != '' && school != '' && pdf !== null && barProgress === 100) {
            try {
                console.log(pdf);
                const docRef = await addDoc(collection(Database, "students"), {
                    barcode: code ,
                    name: `${name}`,
                    school: `${school}`
                });
                // const uploadTask =await uploadBytesResumable(pdfRef, pdf);

                console.log("Done all");
                setErr({errName : "Paper submited" ,errType : "green"})

            } catch (E) {
                console.log(E);
            }
        }
        else {
            if(barProgress !== 100) console.log('wait for upload')
            else console.log("fill all")
            setErr({errName : "Fill all data" ,errType : "orange"})

        }

    }

    const uploadPfd = (e) => {
        e.preventDefault();
        if (code != 0 && name != '' && school != '' && pdf !== null) {
            const pdfRef = ref(notMarkedRef, `${code}.pdf`)
            uploadBytesResumable(pdfRef, pdf).on('state_changed',
                (snapshot) => {
                    setBarProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    console.log(`upload ${barProgress} done`)
                },
                (error) => {
                    setErr({errName : "Upload Error" ,errType : "red"})
                }
            )
        }
        else{
            if(code == 0){
                setErr({errName : "Enter your data first" ,errType : "orange"})
            } 
        }
    }

    const clearForm = () => {
        // e.preventDefault()
        setErr({errName : "", errType : ""})
        setCode(0)
        setName("")
        setPdf(null)
        setSchool("")
        setBarProgress(0)
    }

    return (
        <div className='bg-stone-400 py-8'>
            <form className='lg:w-1/3 md:w-1/2 sm:w-1/2 mx-auto py-4 px-8 flex flex-col border-2 rounded bg-stone-300'>
                <h1 className='text-center text-xl py-2 text-blue-800'>Upload your answer sheet</h1>
                <hr /><hr />
                {(err.errName !== "") && <ErrMessage ErrMsg={err.errName} color={err.errType}/>}
                <div>
                    <div className='flex flex-col my-4'>
                        <label className='px-1'>Barcode Number : </label>
                        <input onChange={e => setCode(e.target.value)}
                            value={code}
                            className='py-1 px-2 bg-stone-100 border-gray-400 border-2 rounded'
                            type="number" placeholder="Enter barcode number" />
                    </div>
                    <div className='flex flex-col my-4'>
                        <label className='px-1'>Name : </label>
                        <input onChange={e => setName(e.target.value)}
                            value={name}
                            className='py-1 px-2 bg-stone-100 border-gray-400 border-2 rounded'
                            type="text"
                            placeholder="Enter your name" />
                    </div>
                    <div className='flex flex-col my-4'>
                        <label className='px-1'>School : </label>
                        <input onChange={e => setSchool(e.target.value)}
                            value={school}
                            className='py-1 px-2 bg-stone-100 border-gray-400 border-2 rounded'
                            type="text"
                            placeholder="Enter your school" />
                    </div>
                </div>
                <div>
                    <div className='flex flex-col my-4'>
                        <label className='px-1'>Answers PDF : </label>
                        <div className='flex'>
                            <input onChange={e => setPdf(e.target.files[0])} className='py-1 px-2 border-gray-300 border-2 rounded' type="file" />
                            {(barProgress === 0 || barProgress === 100) && <button onClick={uploadPfd} className='active:scale-75 hover:bg-blue-900 text-sm bg-blue-700 px-1 py-1  text-white rounded'>Upload</button>}
                        </div>
                        <progress className='mx-auto mt-4' max="100" value={barProgress} ></progress></div>
                </div>
                <div className='flex justify-around px-4 py-8'>
                    <button onClick={submitForm} 
                            type="button" 
                            style={(barProgress === 100)?{}:{backgroundColor : 'gray'}} 
                            className='active:scale-75 hover:bg-green-900 text-lg bg-green-700 px-4 py-1 text-white rounded'>
                                {(barProgress === 100 && name !== '' && code !== 0 && school !== '' )?'Submit':'fill all'} 
                            </button>
                    <button onClick={clearForm} type="reset" className='active:scale-75 hover:bg-red-800 text-lg bg-red-600 px-4 py-1 text-white rounded'>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Form