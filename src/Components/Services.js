import React from 'react';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdSecurity} from 'react-icons/md';
import {GiReceiveMoney} from 'react-icons/gi';
import {RiSecurePaymentLine} from 'react-icons/ri'

const Services = () => {
  return (
    <>
    <div className='container p-3'>
        <div className='row'>
            <div className='col-4 text-center border border-secondary bg-danger'>
            <TbTruckDelivery className='service-icon mt-5'></TbTruckDelivery>
            <p>Super <span className='fw-bold'>fast</span> and <span className='fw-bold'>free</span> delivery</p>
            </div>
            <div className='col-4 text-center'>
              <div className='d-flex flex-column gap-2'>
                <div className='border border-secondary bg-danger'>
                  <MdSecurity className='service-icon'></MdSecurity>
                  <p><span className='fw-bold'>Non-Stop</span> Shipping</p>
                </div>
                <div className='border border-secondary bg-danger'>
                  <GiReceiveMoney className='service-icon'></GiReceiveMoney>
                  <p>Money Back <span className='fw-bold'>Guaranteed</span></p>
                </div>
              </div>
            </div>
            <div className='col-4 text-center border border-secondary bg-danger'>
              <RiSecurePaymentLine className='service-icon mt-5'></RiSecurePaymentLine>
              <p><span className='fw-bold'>Secure</span> Payment</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services
