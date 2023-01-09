import React from 'react'
import Card from './Card'
import image1 from '../../assets/images/Marked.webp'
import image2 from '../../assets/images/Upload.webp'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='p-5 h-max' style={{height:'90vh'}}>
        <div className="flex flex-wrap justify-around w-2/3 mx-auto">

        <Link to="/marks">
          <Card title="Get Marks" image={image1}/>
        </Link>
        
        <Link to="/upload">
            <Card title="Upload Paper" image={image2}/>
        </Link>

        </div>
    </div>
  )
}

export default Hero