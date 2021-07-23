import React,{useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import PersonalInfo from './PersonalInfo'
import PictureConfirmation from './PictureConfirmation';
import Skills from './Skills';
import Success from './Sucess';
import './style.css'
import Preview from './Preview';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button1: {
    color:"white",
    marginRight:"20px",
    backgroundColor:"lightgray"

  },
  button: {
    backgroundColor:"#0d6efd",
    color:"white"

  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  customLabelStyle: {
    fontSize: "20px"
  }
}));

function getSteps() {
  return ['Personal Info', 'KYC Verification', 'Choose your skill','Preview Profile','Success'];
}





export default function HorizontalLinearStepper(props) {

  const { email, fullname, phone, edu, pincode,phoneverified} = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const [formValues, setFormValues] = useState({
    email, fullname,phone,edu,pincode,phoneverified
  });


  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleChange = input => e => {
    setFormValues({
      [input]: e.target.value
    })
    
  }

 

 

  const handleNext = (newValues) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setFormValues({ ...formValues, ...newValues });

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = (newValues) => {
    setFormValues({ ...formValues, ...newValues });
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(step) {
    const isLastStep = (activeStep === steps.length - 1);
    switch (step) {
      case 0:
        return  <PersonalInfo {...formValues} handlechange={handleChange} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} />
         
        
      case 1:
        return <PictureConfirmation {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}  />
      case 2:
        return <Skills {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} />
        case 3:
        return <Preview {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}  />
        case 4:
        return <Success {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext} />
      default:
        return 'Unknown step';
    }
  }

  return (
    
    <div className={classes.root,"container"}>
        <Header />
      {/* <Stepper activeStep={activeStep} className="mystep" >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}  className="mystep"   >
              <StepLabel {...labelProps} classes={{label: classes.customLabelStyle}}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper> */}

<Stepper activeStep={activeStep} className="mystep">
        {steps.map(label => (
          <Step key={label} className="mystep" >
            <StepLabel classes={{label: classes.customLabelStyle}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Fragment>
        {activeStep === steps.length ? (
           <p>You're done!</p>
        ) : (
        <Fragment> {getStepContent(activeStep)} </Fragment>
        )}
      </Fragment>
     
      
  
    </div>
  );
}
