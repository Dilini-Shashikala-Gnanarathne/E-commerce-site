import React,{useState} from 'react'


const Home = () => {
const[number, setNumber]=useState(null);
const[startdate,setStartdate]=useState(null);



  return <>


          <div className='bg-cellwhiteColor w-full max-w-[80%] mx-auto rounded-lg shadow-md md:p-10 object-cover'>
          <div className="mb-5">
            <input type='number' placeholder='Enter Your Password' name='number' 
            className=' text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required
            />
          </div>
          <div className="mb-5">   
            <input type='date' placeholder='Enter Your Email' name='startdate'
            className=' text-headingColor placeholder:text-textColor  cursor-pointer' required
            />
          </div>
          <div className="mb-5">
            <input type='date' placeholder='Enter Your Password' name='enddate' 
            className=' text-headingColor placeholder:text-textColor rounded-md cursor-pointer' required
            />
          </div>
         
          </div>
   
  </>
}

export default Home