import React from 'react';
import {FaInstagram,FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className='container footer'>
      <div className='d-flex flex-row justify-content-between'>
      <p>Get connected with us on social networks:</p>
      <div className='social-icons d-flex flex-row gap-2'>
        <FaInstagram></FaInstagram>
        <FaFacebook></FaFacebook>
      </div>
      </div>
      </div>
    </>
  )
}

export default Footer
