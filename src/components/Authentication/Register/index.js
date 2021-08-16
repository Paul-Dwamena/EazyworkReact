import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import PictureConfirmation from "./PictureConfirmation";
import Skills from "./Skills";
import Success from "./Sucess";
import "./style.css";
import Preview from "./Preview";
import validator from "validator";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { notifyError, notifySuccess } from "../../utils/Notification";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button1: {
    color: "white",
    marginRight: "20px",
    backgroundColor: "lightgray",
  },
  button: {
    backgroundColor: "#0d6efd",
    color: "white",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  customLabelStyle: {
    fontSize: "20px",
  },
}));

function getSteps() {
  return [
    "Personal Info",
    "KYC Verification",
    "Choose your skill",
    "Preview Profile",
    "Success",
  ];
}

export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [emailerror, setEmailError] = useState("");
  const [phoneerror, setPhoneError] = useState("");
  // const [verifyphone,setVerifyPhone]=useState(false)
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [otp, setotp] = useState();

  const handleotp = (e) => {
    setotp(e.target.value);
    console.log(otp);
  };

  const [values, setValues] = useState({
    email: "",
    fullname: "",
    edu: "",
    phone: "",
    gender: "",
    phoneverified: false,
    selfie_url: "",
    frontcard_url: "",
    backcard_url: "",
    salary: "",
    region: "",
    skills: [],
  });

  const sendotp = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/auth/sendotp/`,
        { phone: values.phone }
      );
      setLoading(false);
      notifySuccess("OTP sent successfully");
    } catch (error) {
      setLoading(false);
      notifyError(error.response.data.error);
    }
  };

  const verifyotp = async (event) => {
    event.preventDefault();
    setLoading2(true);
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/auth/validateotp/`,
        { otp: otp }
      );
      setLoading2(false);
      setValues({
        ...values,
        phoneverified: true,
      });

      notifySuccess("Phone number verified successful");
    } catch (error) {
      setLoading2(false);
      notifyError(error.response.data.error);
    }
  };

  const validatephone = (e) => {
    if (e.length > 10) {
      setPhoneError("Enter valid phone number");
    } else if (e.length < 10) {
      setPhoneError("Enter valid phone number");
    } else if (e.toString().substring(0, 1) !== "0") {
      setPhoneError("Enter valid phone number");
    } else {
      setPhoneError("");
    }
  };
  const verifyphone = (phoneverified) => {
    console.log(values.phoneverified);
  };

  const setimages = (image_type, image_url) => {
    if (image_type === "selfie") {
      setValues({
        ...values,
        selfie_url: image_url,
      });
    } else if (image_type === "frontcard") {
      setValues({
        ...values,
        frontcard_url: image_url,
      });
    } else if (image_type === "backcard") {
      setValues({
        ...values,
        backcard_url: image_url,
      });
    }
  };

  const validateemail = (e) => {
    if (validator.isEmail(e)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const onchange = (e) => {
    var inputtype = e.target.name;
    console.log(e.target.value)
    if (inputtype === "email") {
      validateemail(e.target.value);
    } else if (inputtype === "phone") {
      validatephone(e.target.value);
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    console.log(values)
  };

  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const toggleSelected = (item, index) => {
    console.log(selected.length);
    if (selected.filter((o) => o.id === item.id).length === 1) {
      let filtered = selected.filter((o) => o.id !== item.id);
      setSelected(filtered);
      updateSkillsArray(index);
      console.log(filtered, "filte");
      return;
    }
    if (selected.length >= 2) {
      alert("You cant select more than 2");
      return;
    }
    updateSkillsArray(index);
    setSelected([...selected, item]);
    console.log(selected);
  };

  const updateSkillsArray = (index) => {
    let arr = skill;
    let old = skill[index];
    let update = {
      ...old,
      selected: !old.selected,
    };
    arr[index] = update;
    setSkills(arr);
    
  };

  const [selected, setSelected] = useState([]);
  const [skill, setSkills] = useState([
    {
      title: "Sales & Marketing",
      cName: "nav-links",
      id: 1,
      selected: false,
    },
    {
      title: "Apprenticeship",
      cName: "nav-links",
      id: 2,
      selected: false,
    },
    {
      title: "Masonary/Carpentary",
      cName: "nav-links-mobile",
      id: 3,
      selected: false,
    },
    {
      title: "Other Informal job",
      cName: "nav-links-mobile",
      id: 4,
      selected: false,
    },
    {
      title: "Leave Open",
      cName: "nav-links-mobile",
      id: 5,
      selected: false,
    },
  ]);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    // setFormValues({ ...formValues, ...newValues });

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    // setFormValues({ ...formValues, ...newValues });
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

  function getStepContent(step) {
    const isLastStep = activeStep === steps.length - 1;
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            values={values}
            activeStep={activeStep}
            isLastStep={isLastStep}
            handleBack={handleBack}
            handleNext={handleNext}
            phoneerror={phoneerror}
            onchange={onchange}
            emailerror={emailerror}
            verifyphone={verifyphone}
            loading={loading}
            loading2={loading2}
            sendotp={sendotp}
            verifyotp={verifyotp}
            handleotp={handleotp}
            phoneverified={values.phoneverified}
          />
        );

      case 1:
        return (
          <PictureConfirmation
            values={values}
            activeStep={activeStep}
            isLastStep={isLastStep}
            handleBack={handleBack}
            handleNext={handleNext}
            setimages={setimages}
            onchange={onchange}
          />
        );
      case 2:
        return (
          <Skills
            values={values}
            activeStep={activeStep}
            toggleSelected={toggleSelected}
            isLastStep={isLastStep}
            skill={skill}
            selected={selected}
            handleBack={handleBack}
            handleNext={handleNext}
            onchange={onchange}
          />
        );
      case 3:
        return (
          <Preview
            values={values}
            activeStep={activeStep}
            selected={selected}
            isLastStep={isLastStep}
            handleBack={handleBack}
            handleNext={handleNext}
            onchange={onchange}
          />
        );
      case 4:
        return (
          <Success
            values={values}
            activeStep={activeStep}
            isLastStep={isLastStep}
            handleBack={handleBack}
            handleNext={handleNext}
            onchange={onchange}
          />
        );
      default:
        return "Unknown step";
    }
  }

  return (
    <div className={(classes.root, "container")}>
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
        {steps.map((label) => (
          <Step key={label} className="mystep">
            <StepLabel classes={{ label: classes.customLabelStyle }}>
              {label}
            </StepLabel>
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
