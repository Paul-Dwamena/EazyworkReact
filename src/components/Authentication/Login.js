import React, { useState } from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import "./auth.css";
import axios from "axios";

import {
    Box,
    Typography,
    CircularProgress,
    Button
} from '@material-ui/core'
import { NavLink } from "react-router-dom";

const Login = ({history}) => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email,setEmail]=useState('')
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit=async(event)=> {
    event.preventDefault();
    console.log(email,password)

    try {
      const response=await axios.post(`http://127.0.0.1:8000/auth/login/`,
      {email:email,
      password:password})
    } catch (error) {
      console.log(error.response.error)
      
    }
  }

 
      return (

        <div className="mysection">
            <div className="container2">
            <div class="row justify-content-center ">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Login</h2>
				</div>
			</div>
      <div class="row justify-content-center ">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
						<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
							<div class="text w-100">
								<h2>Welcome to Sign Up</h2>
								<p>Don't have an account?</p>
                <NavLink to="/register" class="btn btn-white btn-outline-white">Sign Up</NavLink>
						
							</div>
			      </div>
						<div class="login-wrap p-4 p-lg-5">
			      	<div class="d-flex">
			      		<div class="w-100">
			      			<h3 class="mb-4">Login</h3>
			      		</div>
								{/* <div class="w-100">
									<p class="social-media d-flex justify-content-end">
										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
									</p>
								</div> */}
			      	</div>
              <form action="#" class="signin-form">
			      		<div class="form-group mb-3">
			      			<label class="label" for="name">Email</label>
			      			<input type="email" class="form-control" placeholder="Username" required onChange={(e) => setEmail(e.target.value)} />
			      		</div>
		            <div class="form-group mb-3">
		            	<label class="label" for="password">Password</label>
		              <input type="password" class="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
		            </div>
		            <div class="form-group">
		            	<button type="submit" class="form-control btn btn-primary submit px-3"  onClick={handleSubmit}>Login </button>
		            </div>
		            <div class="form-group d-md-flex">
		            	{/* <div class="w-50 text-left">
			            	<label class="checkbox-wrap checkbox-primary mb-0">Remember Me
									  <input type="checkbox" checked />
									  <span class="checkmark"></span>
										</label>
									</div> */}
									<div class="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div>
		            </div>
		          </form>
              </div>
              </div>
            
            
    

            </div>

            </div>

            </div>
           

            
        </div>
       
      )
          }

export default Login;
