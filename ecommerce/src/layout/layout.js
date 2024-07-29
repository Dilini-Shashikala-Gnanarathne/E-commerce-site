import React from 'react'

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Routers from '../Router/Router';
 

const layout = () => {
  return <>
      <Header />
      <main>
        <Routers />      
      </main>
      <Footer />
    </>
  
};

export default layout;
