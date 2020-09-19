import React, { useState } from 'react';

const Contact =()=>
{

  const [data,setData]=useState({

        firstname:"",
        phone:"",
        email:"",
        msg:"",

  });


  const InputEvent=(event)=>{

      const{name,value}=event.target;

      setData((preVal)=>{


        return{

          ...preVal,
          [name]:value,
        };
      });

  };


  const formSubmit=(e)=>{
      e.preventDefault();

      alert(`My name is ${data.firstname}.My mobile number is ${data.phone} and email is ${data.email} and i want to say ${data.msg}`)

  }

  return(

    <>
      <div className="my-5">
          <h1 className="text-center">Contact us</h1>
      </div>

      <div className="container contact_div">
          <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Full Name</label>
                              <input 
                                  type="text" className="form-control" 
                                  id="exampleFormControlInput1"
                                  name="firstname"
                                  value={data.firstname}
                                  onChange={InputEvent} 
                                  placeholder="Enter Your Name"
                                  required
                              />
                            </div>
                            
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Phone</label>
                              <input 
                                type="number"
                                className="form-control"
                                  id="exampleFormControlInput1"
                                  name="phone"
                                  value={data.phone}
                                  onChange={InputEvent} 
                                  placeholder="Enter Your Phone"
                                  required
                                />
                            </div>


                            <div className="form-group">
                              <label for="exampleFormControlInput1">Email address</label>
                              <input
                                  type="email" 
                                  className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"
                                    required
                                 />
                            </div>
                            
                            <div className="form-group">
                              <label for="exampleFormControlTextarea1">Message</label>
                              <textarea 
                                  className="form-control" 
                                  id="exampleFormControlTextare"
                                  name="msg"
                                  value={data.msg}
                                  onChange={InputEvent}
                                  placeholder="Enter Your Address" 
                                  rows="3">

                               </textarea>
                            </div>


                            
                                <button type="submit" className="btn btn-outline-primary">Submit form</button>
                            
                          </form>
                </div>
          </div>
      </div>
    </>
  )
}



export default Contact;
