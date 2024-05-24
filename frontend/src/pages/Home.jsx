import React from 'react';

import logo from '../assets/images/logo.png';
import loginImg from '../assets/images/Login_image.png'; 

const Home = () => {
  return (
    <>
      <section className='fixed inset-0 flex items-center justify-center px-1 lg:px-0'>
        <div className="bg-cellwhiteColor w-full max-w-[80%] mx-auto rounded-lg shadow-md md:p-10 grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <div><img src={logo} alt="Logo" /></div>
            <div>Form</div>
          </div>
          <div>
            <img src={loginImg} alt="Login" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
