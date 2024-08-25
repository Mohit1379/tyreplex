"use client"
import Image from 'next/image'
import React from 'react'
import styles from '@/styles/our_services.module.scss'

function Services() {
  return (
    <div className='section-container container'>
      <div className='d-flex flex-column'>
        <h5>Services offered by this dealer</h5>
        <div className='d-flex flex-wrap py-3 px-0 px-md-3'>
          <div className={`d-flex flex-column align-items-center col-6 col-md-3 ${styles.service_card}`}>
            <Image src="/wheel-alignment.png" alt='our service' width={100} height={67} />
            <p className='text-primary m-0 py-3'>Wheel Alignment</p>
            <button className='border-0 py-2 px-4 text-white'>Book Now</button>
          </div>
          <div className={`d-flex flex-column align-items-center ms-md-4  col-6 col-md-3 ${styles.service_card}`}>
            <Image src="/wheel-alignment-bal.png" alt='our service' width={100} height={67} />
            <p className='text-primary m-0 py-3'>Wheel Alignment Balance</p>
            <button className='border-0 py-2 px-4 text-white'>Book Now</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services