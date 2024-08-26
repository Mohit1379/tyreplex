import React from 'react';
import styles from "@/styles/shopAddressContainer.module.scss"
import Image from 'next/image';
import ShopImageSlider from '../components/ShopImageSlider';
import FeedBackSlider from '../components/FeedBackSlider';

function ShopAddress() {
  return (
    <div className={`section-container container ${styles.shopAddressContainer}`}>
        <div className='d-flex flex-wrap'>
            <div className='col-md-5 col-12 order-md-0 order-1 mt-md-0 mt-4'>
                <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center'>
                        <h5 className='m-0 pe-2'>SHREE TYRES AND SERVICES</h5>
                        <Image src="/verified.svg" width={18} height={18} alt='verified' />
                        <span className='text-success m-0' style={{fontSize:"14px"}}>
                            Verified
                        </span>
                    </div>
                    <div className='d-flex align-items-center mt-1'>
                         <span className={`${styles.ratingNumberbg} me-2`}>4.9</span>
                         <Image className='me-1' src="/star.png" width={16} height={16} alt='star'/>
                         <Image className='me-1' src="/star.png" width={16} height={16} alt='star'/>
                         <Image className='me-1' src="/star.png" width={16} height={16} alt='star'/>
                         <Image className='me-1' src="/star.png" width={16} height={16} alt='star'/>
                         <Image className='me-1' src="/star.png" width={16} height={16} alt='star'/>
                         <u><span className='ms-2 ps-2 text-primary' style={{fontSize:"14px"}}>2278 Reviews</span></u>
                         <button className='border mt-1 ms-3 py-1 px-2 bg-white rounded' style={{fontSize:"12px"}}>Rate</button>
                    </div>
                    <div className='d-flex align-items-center mt-1'>
                        <Image className='me-4 ms-2' src="/location.svg" width={20} height={20} alt='location'/>
                        <p className='m-0 text-primary'>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                        </p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Image className='me-4 ms-2' src="/time.svg" width={16} height={16} alt='location'/>
                        <p className='m-0'>Open - Monday   to   Sunday - 10:00AM to 8:00PM
                        </p>
                    </div>
                    <div className='d-flex ms-2 mt-3'>
                      <button className='px-5 py-2 rounded'>Get Directions</button>
                    </div>
                </div>
            </div>
            <div className='col-md-7 col-12 order-md-1 order-0'>
            <ShopImageSlider/>
            </div>
        </div>
        <div className='d-flex col-12 mt-5'>
            <p className='text-primary'>2278 Google Reviews</p>
        </div>
        <div className='col-12 mb-4'>
            <FeedBackSlider/>
        </div>
    </div>
  )
}

export default ShopAddress