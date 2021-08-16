import React, { useState } from "react";
import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';
import { notifyError, notifySuccess } from "../../utils/Notification";
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
  const [selectedFile1, setSelectedFile1] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const {
    values,
   
    activeStep,
    setimages,
    isLastStep,
    handleBack,
    handleNext,
   
  } = props;

  const{
    selfie_url,
    frontcard_url,
    backcard_url,


  }=values
  const [selfieurl, setSelfieurl] = useState(selfie_url);
  const [backcardurl, setBackurl] = useState(backcard_url);
  const [frontcardurl, setFronturl] = useState(frontcard_url);

  const filledform=()=>{
    let passed=false
    const {
      selfie_url,
      frontcard_url,
      backcard_url,
     
    }=values

    if (!selfie_url || !frontcard_url || !backcard_url)  {
      passed=true
    }
    return passed

  }
  

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const changeHandler1 = (event) => {
    setSelectedFile1(event.target.files[0]);
  };

  const changeHandler2 = (event) => {
    setSelectedFile2(event.target.files[0]);
  };

  const uploadFiles = async (file, upload_type) => {
    // this.setState({loading:true})
    try {
      let form_data = new FormData();
      form_data.append("image", file);
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/auth/upload_image/`,
        form_data,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      if (upload_type == "selfie") {
        setSelfieurl(response.data.image_url);
        setimages('selfie',response.data.image_url)
        
      }
      else if(upload_type=='frontcard'){
        setFronturl(response.data.image_url)
        setimages('frontcard',response.data.image_url)
        

      }
      else if(upload_type=='backcard'){
        setBackurl(response.data.image_url)
        setimages('backcard',response.data.image_url)
        
      }
      

      //    this.setState({loading:false})
       notifySuccess('Images uploaded successfully')
    } catch (error) {
      // this.setState({loading:false})
       notifyError('There was an error');
    }
  };
  const submitpic = (input) => (e) => {
    if (input === "selfie") {
      uploadFiles(selectedFile, input);
    }
    else if(input==='frontcard'){
      uploadFiles(selectedFile1,input)

    }
    else if(input==="backcard"){
      uploadFiles(selectedFile2,input)

    }
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
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    As part of our security policies, you need to complete these
                    processes for your account to be verified{" "}
                  </p>

                  <div style={{ marginTop: "10px" }}>
                    <p>
                      <span style={{ fontSize: "20px" }}>&#8226;</span> Upload a
                      selfie holding your National Identifcation Card. The image
                      on the card should match your selfie
                    </p>
                    <p>
                      <span style={{ fontSize: "20px" }}>&#8226;</span>
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
              <div className="col-9"></div>
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
                  <div className="upload__image-wrapper">
                    <div className="">
                      <span>
                        <input type="file" onChange={changeHandler} />
                      </span>
                      {/* {selfieurl ?   :  <img src={(selectedFile)} alt=''  width="150px" height="80px" />}   */}
                      {selectedFile ? (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt=""
                          width="150px"
                          height="80px"
                        />
                      ) :null}

                      <div>
                        <button
                          className="btn btn-success mt-2"
                          onClick={submitpic("selfie")}
                          disabled={isFilePicked}
                        >
                          {selfie_url
                            ? "Image uploaded successful"
                            : "Upload image"}
                        </button>
                      </div>
                    </div>
                  </div>
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

                  <div className="upload__image-wrapper">
                    <div className="">
                      <span>
                        <input type="file" onChange={changeHandler1} />
                      </span>
                      {/* {selfieurl ?   :  <img src={(selectedFile)} alt=''  width="150px" height="80px" />}   */}
                      {selectedFile1 ? (
                        <img
                          src={URL.createObjectURL(selectedFile1)}
                          alt=""
                          width="150px"
                          height="80px"
                        />
                      ) :null}

                      <div>
                        <button
                          className="btn btn-success mt-2"
                          onClick={submitpic("frontcard")}
                          disabled={isFilePicked}
                        >
                          {frontcard_url
                            ? "Image uploaded successful"
                            : "Upload image"}
                        </button>
                      </div>
                    </div>
                  </div>
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

                  <div className="upload__image-wrapper">
                    <div className="">
                      <span>
                        <input type="file" onChange={changeHandler2} />
                      </span>
                      {/* {selfieurl ?   :  <img src={(selectedFile)} alt=''  width="150px" height="80px" />}   */}
                      {selectedFile2 ? (
                        <img
                          src={URL.createObjectURL(selectedFile2)}
                          alt=""
                          width="150px"
                          height="80px"
                        />
                      ) : null}

                      <div>
                        <button
                          className="btn btn-success mt-2"
                          onClick={submitpic("backcard")}
                          disabled={isFilePicked}
                        >
                          {backcard_url
                            ? "Image uploaded successful"
                            : "Upload image"}
                        </button>
                      </div>
                    </div>
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
          disabled={filledform()}
          onClick={() => handleNext()}
        >
          {isLastStep ? "Submit Draft" : "Next"}
        </Button>
      </div>
    </Container>
  );
};

export default PictureConfirmation;
