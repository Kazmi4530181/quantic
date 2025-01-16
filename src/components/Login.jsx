import React from "react";
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login() {
  useEffect(() => {
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: false,
       });
    }, []);
  return (
      <div className="container-flex h-100">
      	<div className="contact d-flex h-100">
      	   <div className="form" data-aos="fade-up" data-aos-delay="200">
      	   	<h2 className="text-center fw-bold text-white">Event Management</h2>
      	   	<form className="contact-form d-flex align-items-center justify-content-center flex-column h-100">
      	   		<h3 className="text-center fw-bold text-white">Login Form</h3>
			<div className="form-group py-4">
			  <input
			    type="text"
			    id="name"
			    name="name"
			    value={name}
			    placeholder="Enter Your Username"
			    required
			  />
			</div>
			<div className="form-group py-4">
			  <input
			    type="password"
			    id="password"
			    name="password"
			    placeholder="Enter Your Password"
			    required
			  />
			</div>
			<button class="btn btn-primary" type="submit">Login</button>
		</form>
      	   </div>
      	</div>
    </div>
  );
}

export default Login;
