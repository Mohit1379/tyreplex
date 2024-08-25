import React from 'react';
import Image from 'next/image';
import styles from "@/styles/brandLogo.module.scss"
function OurBrands() {
  return (
    <div className='section-container container'>
        <h5>Deals in</h5>
       <div className={styles.slider}>
		<div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={`${styles.brand_box} me-4 d-flex flex-column`}>
                <Image src="/brand.png" width={168} height={40} alt='logo'/>
                <p className='m-0 pt-3'>MRF</p>
            </div>
        </div>
      
	    </div>
    </div>
  )
}

export default OurBrands