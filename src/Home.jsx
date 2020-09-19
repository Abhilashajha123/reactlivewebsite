import React from 'react';
import Common from './Common';
import career1 from '../src/images/career1.gif';

const Home =()=>
{

  return(

    <>
        <Common 
        name="Welcome to Home page"
        imgsrc={career1}
        visit="/service"
        btname="Get Started"/>
    </>
  )
}



export default Home;
