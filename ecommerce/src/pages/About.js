import React from 'react';

import H1Image from './Pictures/H1.jpg'
const About = () => {
  return (
    <div>
      <div id="about">
        <div className="about-content">


          <div className="about-back"></div>
          <div className="me-grid">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                  <div className="about-image">
                    <img
                    
                      src={H1Image}
                      alt="UrbanMart"
                      className="about-img wow fadeIn"
                      style={{height:'200px'}}
                    />
                  </div>
                </div>
                <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                  <div className="about-details wow fadeIn">
                    <div className="main-title left-title text-left wow fadeIn">
                      <h3>Welcome to UrbanMart</h3>
                      <div className="underline1 no-margin"></div>
                      <div className="underline2 no-margin"></div>
                    </div>
                    <p>
                      Welcome to our ecommerce store! At UrbanMart, we
                      are dedicated to providing an exceptional online shopping
                      experience. Our team combines technical expertise with
                      creative flair to deliver a platform that is both
                      user-friendly and visually appealing.
                    </p>
                    <p>
                      As a leading ecommerce solution provider, we specialize in
                      crafting tailored online shopping experiences that cater
                      to a diverse range of customers. Whether you're browsing
                      from your desktop or mobile device, we ensure seamless
                      navigation and a secure checkout process.
                    </p>
                    <a
                      className="about-link-1"
                      href="/company-profile.pdf"
                      target="_blank"
                    >
                      Company Profile
                    </a>
                    <a className="about-link-2" href="#contact">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="work-counter text-center">
            <div className="counter">
              <div className="container">
                <div className="row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="work-statistics">
                      <i className="fa fa-shopping-bag stat-icon" aria-hidden="true"></i>
                      <h3 className="Count">1000+</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Products Available</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="work-statistics">
                      <i className="fa fa-users stat-icon" aria-hidden="true"></i>
                      <h3 className="Count">500,000+</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Satisfied Customers</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="work-statistics">
                      <i className="fa fa-trophy stat-icon" aria-hidden="true"></i>
                      <h3 className="Count">50+</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Awards Won</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="work-statistics">
                      <i className="fa fa-coffee stat-icon" aria-hidden="true"></i>
                      <h3 className="Count">1000+</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Cups of Coffee Consumed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="love-grid text-center">
            <div className="container">
              
              <div className="row love-row wow fadeIn">
                <div className="col-md-3 col-sm-6">
                  <div className="love-details" data-wow-delay=".1s">
                    <i className="fa fa-shopping-cart love-icon" aria-hidden="true"></i>
                    <h3>Wide Product Range</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Explore thousands of products across various categories.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="love-details" data-wow-delay=".3s">
                    <i className="fa fa-mobile love-icon" aria-hidden="true"></i>
                    <h3>Mobile-Optimized</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Enjoy a seamless shopping experience on your mobile device.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="love-details" data-wow-delay=".2s">
                    <i className="fa fa-shield love-icon" aria-hidden="true"></i>
                    <h3>Secure Shopping</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Shop with confidence using our secure checkout process.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="love-details" data-wow-delay=".4s">
                    <i className="fa fa-users love-icon" aria-hidden="true"></i>
                    <h3>Customer Satisfaction</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>We prioritize customer satisfaction and feedback.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
