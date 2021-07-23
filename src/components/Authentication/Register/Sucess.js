import React,{useState} from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import { notifySuccess } from '../../utils/Notification';

const Success = (props) => {
  const { values, activeStep, isLastStep, handleBack, handleNext } = props;

  const submitform=()=>{
    notifySuccess('Submitted Successfully')
  }

          
   
 
  return (
    <Container >
      <div  style={{backgroundColor:"#f2f2f2", width:"100%",height:"500px",marginTop:"100px"}}>
          <div className="row" >
              <div className="col-9" style={{margin:"110px auto",backgroundColor:"white",padding:"60px",borderRadius:"10px",fontSize:"20px"}}>
              <p>You have succcessfully completed your account registration on <strong>Eazyworkgh</strong>. It will take between <strong>12-24hours</strong> of working days to verify your account.</p>
              <p>We will send you an SMS notification when your account is verified. However you can check your account verification status on your dashboard after logging in </p>
          </div>

              </div>

    </div>

    <div
style={{ textAlign: "right", marginTop: "10px", marginBottom: "10px" }}
>
{activeStep !== 0 && (
  <Button
    onClick={() => {
      handleBack(values);
    }}
  >
    {" "}
    Home{" "}
  </Button>
)}
<Button
  className="verify-btn"
  variant="contained"
  color="primary"
  onClick={submitform}
>
  {isLastStep ? "Submit " : "Next"}
</Button>
</div>
    </Container>
  )
}

export default Success