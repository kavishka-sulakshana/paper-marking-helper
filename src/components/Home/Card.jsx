import React from 'react'

const Card = ({title, image}) => {
  return (
        <div className='w-52 h-52 box-shadow-2 cursor-pointer flex flex-col justify-center bg-neutral-100 rounded-lg m-4 p-4 items-center hover:scale-110'>
            <div className='text-lg text-black my-2'>
                {title}
            </div>
            <img src={image} alt="-" className='w-24' />

        </div>
  )
}

export default Card