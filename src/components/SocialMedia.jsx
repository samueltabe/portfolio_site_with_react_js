import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
           <a href="https://twitter.com/samt_tabe/"><BsTwitter/></a>
       </div>
       <div>
           <a href="https://www.instagram.com/samuel_tabe/"><BsInstagram/></a>
       </div>
       <div>
           <a href="https://www.facebook.com/samuel.tabe.58"><FaFacebookF/></a>
       </div>
    </div>
  )
}

export default SocialMedia
