import React from 'react'

function Footer() {
  return (
        <footer className="section bg-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Information</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Pages</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Feuchers</a></li>
                            <li><a href="">Pricing</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Car Tyres </a></li>
                            <li><a href="">Bike Tyres</a></li>
                            <li><a href="">Tyre Pressure</a></li>
                            <li><a href="">Commercial Tyres</a></li>
                            <li><a href="">Accessories</a></li>
                            <li><a href="">More</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Help</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Sign Up </a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Terms of Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                        <p className="contact-info mt-4">Contact us if need help withanything</p>
                        <p className="contact-info">+01 123-456-7890</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center mt-5">
            <p className="footer-alt mb-0 f-14">©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer