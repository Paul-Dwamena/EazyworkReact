import React, { useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import UploadFile from "../../utils/UploadFile";
import ImageUpload from "../../utils/ImageUpload";

const PictureConfirmation = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const { values, activeStep, isLastStep, handleBack, handleNext } = props;

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Container>
      <div className="mysection">
        <div
          style={{ borderRadius: "3px", flexDirection: "row" }}
          className="box"
        >
          <div className="text-wrap2">
            <h3>Picture Verification</h3>
          </div>

          <div style={{ marginTop: "50px" }}>
            <div className="row">
              <div className="col-12">
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold" ,fontSize:"20px"}}>
                    As part of our security policies, you need to complete these
                    processes for your account to be verified{" "}
                  </p>

                  <div style={{ marginTop: "10px"}}>
                  
                      <p>
                        <span style={{fontSize:"20px"}}>&#8226;</span> Upload a selfie holding your
                        National Identifcation Card. The image on the card
                        should match your selfie
                      </p>
                      <p>
                      <span style={{fontSize:"20px"}}>&#8226;</span> 
                        Take a photo of the front and back of the National
                        Identifcation Card you used in taking the selfie and
                        upload.{" "}

                      </p>

                      {/* <p>
                      <span style={{fontSize:"20px"}}>&#8226;</span> Click verify your account
                    
                      </p>
                       */}
                      
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-9">
                
              </div>
              <div className="col-md-4 mb-2">
                    <div
                      style={{
                        backgroundColor: "lightgray",
                        textAlign: "center",
                        width: "80%",
                        padding: "30px",
                        margin: "0 auto",
                      }}
                      className="ro"
                    >
                      <p style={{ fontWeight: "bold", textAlign: "center" }}>
                        Upload Selfie Here
                      </p>

                      <ImageUpload />
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div
                      style={{
                        backgroundColor: "lightgray",
                        textAlign: "center",
                        width: "80%",
                        padding: "30px",
                        margin: "0 auto",
                      }}
                      className="ro"
                    >
                      <p style={{ fontWeight: "bold", textAlign: "center" }}>
                        Upload Front of ID Card
                      </p>

                      <ImageUpload />
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div
                      style={{
                        backgroundColor: "lightgray",
                        textAlign: "center",
                        width: "80%",
                        padding: "30px",
                        margin: "0 auto",
                      }}
                      className="ro"
                    >
                      <p style={{ fontWeight: "bold", textAlign: "center" }}>
                        Upload Back of ID Card
                      </p>

                      <ImageUpload />
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
  );
};

export default PictureConfirmation;
