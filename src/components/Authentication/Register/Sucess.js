import React, { useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { notifySuccess, notifyError } from "../../utils/Notification";

import axios from "axios";

const Success = (props) => {
  const { values, activeStep, isLastStep, handleBack, handleNext } = props;
  const [loading, setLoading] = useState(false);

  const submitform = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/auth/promoterregister/`,
        {
          email: values.email,
          phone: values.phone,
          gender: values.gender.toLowerCase(),
          fullname: values.fullname,
          region: values.region,
          frontcard_url: values.frontcard_url,
          backend_url: values.backcard_url,
          selfie_url: values.selfie_url,
          phoneverified: true,
          salary: values.salary,
          education: values.edu,
          skills: values.skills,
        }
      );
      setLoading(false);
      window.location.href="https://ezywork.vercel.app/"
      notifySuccess("Submitted Successfully");
    } catch (error) {
      setLoading(false);
      notifyError(error.response.data.error);
    }
  };

  return (
    <Container>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          width: "100%",
          height: "500px",
          marginTop: "100px",
        }}
      >
        <div className="row">
          <div
            className="col-9"
            style={{
              margin: "110px auto",
              backgroundColor: "white",
              padding: "60px",
              borderRadius: "10px",
              fontSize: "20px",
            }}
          >
            <p>
              You have succcessfully completed your account registration on{" "}
              <strong>Eazyworkgh</strong>. Click on the submit button below to
              submit your details. It will take between{" "}
              <strong>12-24hours</strong> of working days to verify your
              account.
            </p>
            <p>
              We will send you an SMS notification when your account is
              verified. However you can check your account verification status
              on your dashboard after logging in{" "}
            </p>
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
          onClick={submitform}
        >
          {isLastStep ? "Submit " : "Next"}
        </Button>
      </div>
    </Container>
  );
};

export default Success;
