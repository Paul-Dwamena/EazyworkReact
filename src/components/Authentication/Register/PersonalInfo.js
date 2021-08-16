import React, { useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import "./style.css";
import { FormErrors } from "./FormError";
import validator from "validator";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Spinner } from "../../utils/Spinner";


const UserDetails = ({
 
  emailerror,
 
  loading,
  loading2,
  handleotp,
  sendotp,
  verifyotp,
  values,
  activeStep,
  isLastStep,
  handleBack,
  handleNext,
  phoneerror,
  onchange,
  
}) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      width: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const {
    email,
    fullname,
    phone,
    edu,
    gender,
    phoneverified,
    region
  }=values

  const filledform=()=>{
    let passed=false
    const {
      email,
      fullname,
      phone,
      edu,
      gender,
      phoneverified,
      region
    }=values

    if (!fullname || !email || !phone || !edu || !gender || !phoneverified || !region)  {
      passed=true
    }
    return passed

  }


  return (
    <Container>
      <div className="mysection">
        <div
          style={{ borderRadius: "3px", flexDirection: "row" }}
          className="box"
        >
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
                      name="email"
                      value={email}
                      type="email"
                      onChange={onchange}
                    />

                    <br />

                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {emailerror}
                    </span>
                    <br />

                    <TextField
                      placeholder="Full Name"
                      label="Full Name"
                      variant="outlined"
                      autoComplete="fullname"
                      value={fullname}
                      name="fullname"
                      onChange={onchange}
                      fullWidth
                    />
                    <br />
                    <br />

                    <TextField
                      placeholder="Phone Number"
                      label="Phone Number"
                      variant="outlined"
                      type="number"
                      value={phone}
                      name="phone"
                      onChange={onchange}
                      fullWidth
                    />

                    <br />
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {phoneerror}
                    </span>
                    <br />

                    <FormControl className={classes.formControl}>
                      <InputLabel
                        id="demo-simple-select-label"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Educational background
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        variant="outlined"
                        value={edu}
                        name="edu"
                        onChange={onchange}
                      >
                        <MenuItem value="None">None</MenuItem>
                        <MenuItem value="Basic">Basic</MenuItem>
                        <MenuItem value="SHS Leaver">SHS Leaver</MenuItem>
                        <MenuItem value="Unviversity Graduate">
                          University Graduate
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <br />
                    <br />

                    <TextField
                      placeholder="Region"
                      label="Region"
                      //   onChange={handleChange('password')}
                      //   defaultValue={values.password}
                      variant="outlined"
                      fullWidth
                      type="text"
                      value={region}
                      name="region"
                      onChange={onchange}
                    />
                  </form>
                </div>
              </div>
              <div className="column">
                <FormControl className={classes.formControl}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ marginLeft: "15px" }}
                  >
                    {" "}
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    name="gender"
                    value={values.gender}
                    onChange={onchange}
                  >
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                  </Select>
                </FormControl>
                <div className="green-column mt-5">
                  <ul>
                    <li>
                      <strong>
                        We need to confirm your phone number because it is going
                        to be used for your payment{" "}
                      </strong>{" "}
                    </li>
                    <li>
                      <strong>
                        {" "}
                        Click on send button below to get your code sent to your
                        mobile number.
                      </strong>
                    </li>
                    <li>
                      <strong>
                        {" "}
                        Now click on verify phone number to get your phone
                        number verified{" "}
                      </strong>
                    </li>
                  </ul>

                  <form>
                    <div className="row">
                      <div className="column2">
                        <TextField
                          placeholder="Code"
                          label="Code"
                          type="number"
                          onChange={handleotp}
                          fullWidth
                        />
                      </div>
                      <div className="column2" style={{ marginBottom: "30px" }}>
                        <button class="btn-primary" onClick={sendotp}>
                          <i class="fa fa-send"></i>
                          {loading ? <Spinner /> : null} Send
                        </button>
                      </div>
                    </div>

                    <div className="column" style={{ marginBottom: "30px" }}>
                      {phoneverified ? (
                        <button className="btn btn-success" disabled>
                          Phone Number verified
                        </button>
                      ) : (
                        <button
                          className="btn btn-default verify-btn"
                          onClick={verifyotp}
                        >
                          {" "}
                          {loading2 ? <Spinner /> : null} Verify phone number
                        </button>
                      )}
                    </div>
                  </form>
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
              handleBack();
            }}
            className={classes.button}
          >
            {" "}
            Back{" "}
          </Button>
        )}

        <Button
          className="verify-btn"
          variant="contained"
          color="primary"
          disabled={filledform()}
          onClick={() => handleNext()}
        >
          {isLastStep ? "Submit Draft" : "Next"}
        </Button>
      </div>
    </Container>
  );
};

export default UserDetails;
