import React from 'react';
import Routers from './Router/Router'; // Adjust the path as needed
import Header from './Components/Header'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routers />      
      </main>
      <Footer />
    </div>
  );
};

export default App;
