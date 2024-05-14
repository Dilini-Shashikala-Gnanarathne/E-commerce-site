import logo from '../../assets/images/logo.png';

const navLinks = [
{
  path:'/home',
  display: 'Home',
},

];

const Header = () => {

  
  return ( 
  <header className='header flex items-center' >
   
        {/*============== logo ================= */ }
        <div>
         
          <img src={logo} alt="" />
        </div>

   </header>
   );
};

export default Header;
