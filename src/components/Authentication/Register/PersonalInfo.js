import React,{useState} from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css'
import { FormErrors } from './FormError'
import validator from 'validator'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Spinner } from '../../utils/Spinner';
import axios from 'axios';
import { notifyError,notifySuccess } from '../../utils/Notification';

const UserDetails = (props) => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          width:"100%",
          
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        
        },
        
      }));

     
      const classes = useStyles();
      
      
      const { values, email, fullname, phone, edu,pincode, phoneverified, activeStep, isLastStep, handlechange, handleBack, handleNext } = props;
      const [e,setEmail]=useState(email)
      const [fname,setFullname]=useState(fullname)
      const [contact,setContact]=useState(phone)
      const [pin,setPin]=useState(pincode)
      const [education, setEducation] = useState(edu)
      const [emailError, setEmailError] = useState('')
      const [phoneError,setPhoneError]=useState('')
      const [phonever,setPhoneVerfiy]=useState(phoneverified)
      const [loading, setLoading] = useState(false);
      const [loading2, setLoading2] = useState(false);
      const [otp,setOtp]=useState('')



      const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
         
          setEmailError('')
        } else {
          setEmailError('Enter valid Email!')
        }
        setEmail(email)

      }


      const validatePhoneNumber = (e) => {
        var number=e.target.value
        console.log(number)
        if(number.length>10){
          setPhoneError('Enter valid phone number')
        }
        else if(number.length<10){
          setPhoneError('Enter valid phone number')
        }
        else if(number.toString().substring(0, 1)!=='0'){
          setPhoneError('Enter valid phone number')

        }
        else{
          setPhoneError('')

        }
     
      setContact(number)
      
       }

       const sendotp= async(event)=>{
         event.preventDefault()
         setLoading(true)
         try {
          const response = await axios.post(
            `http://127.0.0.1:8000/api/v1/auth/sendotp/`,
            {phone:contact})
          setLoading(false);
          notifySuccess('OTP sent successfully')
        } catch (error) {
          setLoading(false);
          notifyError(error.response.data.error);
        }
    

       }

       const verifyotp= async(event)=>{
        event.preventDefault()
        setLoading2(true)
        try {
         const response = await axios.post(
           `http://127.0.0.1:8000/api/v1/auth/validateotp/`,
           {otp:otp})
         setLoading2(false);
         setPhoneVerfiy(true)
         notifySuccess('Phone number verified successful')
       } catch (error) {
         setLoading2(false);
         notifyError(error.response.data.error);
       }
   

      }
       

      
      


      
      const handleChange = (event) => {
        setEmail(event.target.value)
    
      };
      const handleChange1 = (event) => {
        setFullname(event.target.value)
    
      };
      const handleChange2 = (event) => {
        setContact(event)
    
      };
      const handleChange3= (event) => {
        setPin(event.target.value)
    
      };
      
      const handleChange4= (event) => {
        setEducation(event.target.value)
    
      };

      const handleOTP=(event)=>{
        setOtp(event.target.value)
      }
      

    
      const v={
        
        email:e,
        fullname:fname,
        phone:contact,
        pincode:pin,
        edu:education,
        phoneverified:phonever
      }


      

    
  
  
  return (
    <Container>
        <div className="mysection"> 
        <div  style={{borderRadius:"3px",flexDirection:"row"}} className="box">
        <div className="text-wrap2">
          <h3>Personal Information</h3>
        </div>
        <div className="some-page-wrapper">
        <div className="row">
            <div className="column">
                <div className="blue-column ">

                <form>
                <TextField
                  placeholder="Email Address"
                  label="Email Address"
                  variant="outlined"
                  autoComplete="email"
                  fullWidth
                  value={e}
                  type="email"
                  
                  onChange={validateEmail}
                />
        
              <br />
              
              <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
              <br />
              

          
    
                <TextField 
                  placeholder="Full Name"
                  label="Full Name"
                //   onChange={handleChange('username')}
                //   defaultValue={values.username}
                  variant="outlined"
                  autoComplete="fullname"
                  value={fname}
                  onChange={handleChange1}
                  fullWidth
                />
             <br />
              <br />
              

              <TextField 
                  placeholder="Phone Number"
                  label="Phone Number"
                //   onChange={handleChange('username')}
                //   defaultValue={values.username}
                  variant="outlined"
                  type="number"
                  value={fname}
                  onChange={validatePhoneNumber}
                  fullWidth
                />
            
              <br />
              <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{phoneError}</span>
              <br />
              
          
                
              
            
              <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" style={{marginLeft:"15px"}}> Educational background</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={education}
          onChange={handleChange4}
        >
          <MenuItem value="None">None</MenuItem>
          <MenuItem value="Basic">Basic</MenuItem>
          <MenuItem value="SHS Leaver">SHS Leaver</MenuItem>
          <MenuItem value="Unviversity Graduate">University Graduate</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      
      
      <TextField 
                  placeholder="Enter your pin (4 digits)"
                  label="Pin code"
                //   onChange={handleChange('password')}
                //   defaultValue={values.password}
                 variant="outlined"
                  fullWidth
                  type="number"
                  value={pin}
                  onChange={handleChange3}
                />
    

    
        
      
        </form>


                </div>
            
            </div>
            <div className="column">
                <div className="green-column">
                    <ul>
                        <li><strong>We need to confirm your phone number because it is going to be used for your payment </strong> </li>
                        <li><strong> Click on send button below to get your code sent to your mobile number.</strong></li>
                        <li><strong> Now click on verify phone number to get your phone number verified </strong></li>
                    </ul>
               
                <form>
                <div className="row">
                    <div className="column2"> 
                    <TextField 
                  placeholder="Code"
                  label="Code"
                //   onChange={handleChange('email')}
                //   defaultValue={values.email}
                  // variant="outlined"
                  type="number"
                  onChange={handleOTP}
                  fullWidth
                />

                    </div>
                    <div className="column2" style={{marginBottom:"30px"}}>
                    <button class="btn-primary" onClick={sendotp}><i class="fa fa-send"></i>{loading ? <Spinner /> : null } Send</button>
                        
                    </div>
                    
                    
                </div>
               
                <div className="column" style={{marginBottom:"30px"}}>
                 { phonever ? (
                      <button className="btn btn-success" disabled>Phone Number verified</button>

                ):(

                  <button className="btn btn-default verify-btn" onClick={verifyotp}> {loading2 ? <Spinner /> : null } Verify phone number</button>

                )
                }

                     
                        
                    </div>
             
                </form>
               

                </div>
                
                
                
            </div>
        </div>

        
            
        </div>
       
       </div>
      
      
      </div>
      <div style={{textAlign:"right",marginTop:"10px",marginBottom:"10px"}}>
        
        {activeStep !== 0 && (
          <Button onClick={() => { handleBack(values) } } className={classes.button}> Back </Button>
        )}
        <Button className="verify-btn" variant="contained" color="primary"  onClick={
            () => handleNext(v)
              }> 
          {isLastStep ? 'Submit Draft' : 'Next'}
        </Button>
      </div>


    
     
    </Container>
  )
}

export default UserDetails