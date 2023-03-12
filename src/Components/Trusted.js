import React from 'react';
import onePlus from '../Images/OnePlus-New-Logo-2.webp';
import samsung from '../Images/Samsung_Logo.png';
import puma from '../Images/82-827316_logo-puma-brand-nike-symbol-transparent-background-puma.png';
import vivo from '../Images/PngItem_91072.png';
import gucci from '../Images/672-6722266_partner-logo-gucci-logo-hd-png-download.png';
import levis from '../Images/83-838182_levis-logo-transparent-background-levis-logo-transparent-background.png'

const Trusted = () => {
  return (
    <>
      <div className='container text-center brand-company p-2 trusted'>
      <h3>Trusted By 1000+ Companies</h3>
        <div className='row'>
        <div className='d-flex flex-lg-row gap-lg-2 justify-content-around'>
          <div className='col-lg-2'>
            <img src={onePlus} className='brand' alt='one plus'/>
          </div>
          <div className='col-lg-2'>
          <img src={samsung} className='brand' alt='samsung'/>
          </div>
          <div className='col-lg-2'>
          <img src={puma} className='brand' alt='puma'/>
          </div>
          </div>
          <div className='d-flex flex-lg-row gap-lg-2 justify-content-around mt-4'>
          <div className='col-lg-2 p-2'>
          <img src={vivo} className='vivo' alt='vivo'/>
          </div>
          <div className='col-lg-2'>
          <img src={gucci} className='vivo' alt='gucci'/>
          </div>
          <div className='col-lg-2'>
          <img src={levis} className='vivo' alt='levis'/>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trusted
