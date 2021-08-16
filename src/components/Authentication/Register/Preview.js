import React from "react";
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

function Preview(props) {
  const {
    selected,
    values,
    activeStep,
    isLastStep,
    handleBack,
    handleNext,
  } = props;

  const {  email,
    fullname,
    phone,
    edu,
    gender,
    salary,
    region,
    phoneverified,
    selfie_url,
    frontcard_url,
    backcard_url} =values

  console.log(phoneverified)
  const useStyles = makeStyles((theme) => ({
    formControl: {
      width: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const [education, setEducation] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setEducation(event.target.value);
  };
  return (
    <Container>
      <div>
        <div className="mysection">
          <div
            style={{ borderRadius: "3px", flexDirection: "row" }}
            className="box"
          >
            <div className="some-page-wrapper">
              <div className="row">
                <div className="column">
                  <h3>Personal Info</h3>
                  <ul>
                    <li>Fullname: {fullname}</li>
                    <li>Email: {email}</li>
                    <li>Phone Number: {phone}</li>
                    <li>Gender: {gender}</li>
                    <li>Region: {region}</li>
                    <li>Education: {edu}</li>
                  </ul>
                </div>
                <div className="column">
                  <h3>Skills and other Info</h3>
                  <div className="green-column">
                    <p>You have chosen the following skills </p>

                    {selected.map(function (skill) {
                      return (
                        <li>
                          {skill.title}
                        </li>
                      );
                    })}
                  </div>
                  <p>Salary expectation: {salary}</p>
                  <p>Is your phone verified? {phoneverified ? 'True' :'False'}</p>
                  <p>Have you uploaded your selfie? {selfie_url ? 'True':'False'}</p>
                  <p>Have you uploaded the picture of the back of your id card? {backcard_url ? 'Yes':'No'}</p>
                  <p>Have you uploaded picture of the front of your id card? {frontcard_url ? 'Yes':'No'}</p>
              
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
          >
            {" "}
            Back{" "}
          </Button>
        )}
        <Button
          className="verify-btn"
          variant="contained"
          color="primary"
          onClick={() => handleNext()}
        >
          {isLastStep ? "Submit Draft" : "Next"}
        </Button>
      </div>
    </Container>
  );
}

export default Preview;
