import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css'

function Preview(props) {
  const { values, activeStep, isLastStep, handleBack, handleNext } = props;
    const useStyles = makeStyles((theme) => ({
        formControl: {
          width:"100%"
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
        
      }));

      const [education, setEducation] = React.useState('');
      const classes = useStyles();
      

      const handleChange = (event) => {
        setEducation(event.target.value);
      };
    return (
        <Container>
        <div>
            <div className="mysection"> 
        <div  style={{borderRadius:"3px",flexDirection:"row"}} className="box">
        
        <div className="some-page-wrapper">
        <div className="row">
            <div className="column">
            <h3>Personal Info</h3>
         <ul>
             <li>Name:Paul Dwamena</li>
             <li>Name:Paul Dwamena</li> <
                 li>Name:Paul Dwamena</li> 
                 <li>Name:Paul Dwamena</li> 
                 <li>Name:Paul Dwamena</li>
         </ul>
            
            </div>
            <div className="column">
            <h3>Skills and other Info</h3>
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
                  autoComplete="email"
                  fullWidth
                />

                    </div>
                    <div className="column2" style={{marginBottom:"30px"}}>
                    <button class="btn-primary"><i class="fa fa-send"></i> Send</button>
                        
                    </div>
                    
                    
                </div>
                </form>
               
               

                </div>
                
                
                
            </div>

          
        </div>
            
        </div>
       
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
    Back{" "}
  </Button>
)}
<Button
  className="verify-btn"
  variant="contained"
  color="primary"
  onClick={() => handleNext(values)}
>
  {isLastStep ? "Submit Draft" : "Next"}
</Button>
</div>

    
     
    </Container>

            
        
    )
}

export default Preview
