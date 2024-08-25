"use client"
import React from 'react'
import Image from 'next/image'

function Navbar() {

    const handleMenuHover = (e) => {
        if (window.innerWidth > 750) {
          const target = e.target.closest('.nav-item');
          if (target) {
            target.classList.add('show');
            setTimeout(() => {
              if (target.matches(':hover')) {
                target.classList.add('show');
              } else {
                target.classList.remove('show');
              }
            }, 1);
          }
        }
      };
  return (
    <div className="navigation-wrap bg-white start-header start-style">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-md navbar-light">
					
						<a className="navbar-brand" href="https://front.codes/" target="_blank">
                        <Image src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60" priority={true} width={150} height={36} alt='logo' title='logo' />
                        </a>	
						
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mx-auto py-4 py-md-0">
								
								<li className="nav-item dropdown pe-4 pe-md-0 me-0 me-md-4" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
									<a className="nav-link dropdown-toggle text-primary" data-bs-toggle="dropdown" href="#" role="button"  aria-expanded="false">Car Tyres</a>
									<ul className="dropdown-menu">
                                        <a className="text-primary ps-4 mb-2 mt-3 fw-bold" href="#">Popular Car Tyres</a>
									    <a className="dropdown-item text-primary" href="#">MRF Tyres</a>
										<a className="dropdown-item text-primary" href="#">CEAT Tyres</a>
										<a className="dropdown-item text-primary" href="#">GoodYear Tyres</a>
										<a className="dropdown-item text-primary" href="#">Apollo Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">Bridgestone Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">JK Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">Michelin Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">All Car Tyres</a>
									</ul>
								</li>
                                <li className="nav-item dropdown pe-4 pe-md-0 me-0 me-md-4 " onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
									<a className="nav-link dropdown-toggle text-primary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Bike Tyres</a>
									<ul className="dropdown-menu">
                                        <p className="text-primary ps-4 mb-2 mt-3 fw-bold" href="#">Popular Bike Tyres</p>
										<a className="dropdown-item text-primary" href="#">MRF Tyres</a>
										<a className="dropdown-item text-primary" href="#">CEAT Tyres</a>
										<a className="dropdown-item text-primary" href="#">GoodYear Tyres</a>
										<a className="dropdown-item text-primary" href="#">Apollo Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">Bridgestone Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">JK Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">Michelin Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">All Car Tyres</a>
									</ul>
								</li>
                                <li className="nav-item pe-4 pe-md-0 me-0 me-md-4 ">
									<a className="nav-link  text-primary" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tyre Pressure</a>
								</li>
                                <li className="nav-item pe-4 pe-md-0 me-0 me-md-4 " onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
									<a className="nav-link dropdown-toggle text-primary" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Commercial Tyres</a>
									<div className="dropdown-menu">
										<a className="dropdown-item text-primary" href="#">All Commercial Tyres</a>
									</div>
								</li>
                                <li className="nav-item pe-4 pe-md-0 me-0 me-md-4 " onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
									<a className="nav-link dropdown-toggle text-primary" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Accessories</a>
									<div className="dropdown-menu">
										<a className="dropdown-item text-primary" href="#">Accessories</a>
                                        <a className="dropdown-item text-primary" href="#">Batteries</a>
                                        <a className="dropdown-item text-primary" href="#">Alloys Wheels</a>
									</div>
								</li>
                                <li className="nav-item pe-4 pe-md-0 me-0 me-md-4" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>
									<a className="nav-link dropdown-toggle text-primary" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
									<div className="dropdown-menu">
										<a className="dropdown-item text-primary" href="#">CashBack Offer</a>
                                        <a className="dropdown-item text-primary" href="#">Find Tyre Dealers</a>
                                        <a className="dropdown-item text-primary" href="#">Compare Tyres</a>
                                        <a className="dropdown-item text-primary" href="#">Are You A Tyre Dealer</a>
                                        <a className="dropdown-item text-primary" href="#">Wheel Balancing</a>
                                        <a className="dropdown-item text-primary" href="#">Wheel Alignment</a>
									</div>
								</li>
			
							</ul>
						</div>
						<p className='mb-2 mb-lg-0 text-primary d-flex align-items-center d-none d-md-block' style={{cursor:"pointer"}}><Image className='me-1' src="/login.svg" width={20} height={20} alt='login' />Login</p>
					</nav>		 
				</div>
			</div>
		</div>
	</div>
  )
}

export default Navbar