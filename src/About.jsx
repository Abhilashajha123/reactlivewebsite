import React from 'react';
import Common from './Common';
import career2 from '../src/images/career2.gif';

const About =()=>
{

  return(

   <>
        <Common 
        name="Welcome to About page"
        imgsrc={career2}
        visit="/contact"
        btname="Contact Now"/>
   </>
  )
}



export default About;
