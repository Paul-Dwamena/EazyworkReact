import React, { useState } from "react";
import "./style.css";
import background from "../../images/workers2.jpg";
import { NavLink } from "react-router-dom";
import { Modal } from 'react-bootstrap';

function Index() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullscreen, setFullscreen] = useState(true);

  const RedepmtionItemModal = () => {
    // const {}=redemptionDetail
  
    return ( 
      <>
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose}
          fullscreen={fullscreen}
        >
          <Modal.Header closeButton>
            <Modal.Title>Redemption Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
           
          </Modal.Body>
        </Modal>
      </>
    );
  };
  return (
    <div>
          {RedepmtionItemModal()}
      <body className="home page-template page-template-page-minimal-header-and-footer page-template-page-minimal-header-and-footer-php page page-id-5780 wp-custom-logo fl-builder header-display">
        <div id="page" className="site">
          <header
            id="masthead"
            className="hr__site-header hr__site-header--no-main-nav"
            style={{ marginTop: "50px", marginRight: "50px" }}
          >
            <div id="header-sticky">
              <div className="container">
                <div className="site-branding">
                  <a
                    style={{
                      fontSize: "30px",
                      fontWeight: "bolder",
                      outline: "none",
                      color: "#39424e",
                    }}
                    href=""
                    className="custom-logo-link"
                    rel="home"
                  >
                    EzyWorkGH
                  </a>{" "}
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>{" "}
                </div>

                <div className="main-area" style={{ marginTop: "50px" }}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-6">
                      <h1
                        className="fl-heading main-h"
                        style={{ color: "#738f93" }}
                      >
                        <span className="fl-heading-text">
                          Connecting Job seekers
                        </span>
                        <span className="fl-heading-text">
                          <br /> with great businesses
                        </span>
                      </h1>
                      <div
                        className="left-body hirers"
                        style={{ marginTop: "50px" }}
                      >
                        <div className="row">
                          <div className="col-md-5 col-sm-12">
                            <h3 className="fl-heading">
                              <span className="fl-heading-text myheadings">
                                For Business
                              </span>
                            </h3>
                            <div
                              className="fl-module fl-module-rich-text fl-node-5d7c1d1ca250a"
                              data-node="5d7c1d1ca250a"
                            >
                              <div className="fl-module-content fl-node-content">
                                <div className="fl-rich-text">
                                  <p>
                                    We are the leading employment platform that
                                    connects you with the right labour skills
                                    set{" "}
                                    <span style={{ fontWeight: "400" }}>
                                       to boost productivity
                                    </span>
                                    .
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div style={{ marginTop: "50px" }}>
                              <a
                                href=""
                                style={{ textDecoration: "none" }}
                                className="fl-button"
                              >
                                Start Hiring
                              </a>
                            </div>
                          </div>
                          <div className="col-md-1 col-lg-1">
                            <h1></h1>
                          </div>
                          <div className="col-md-5 col-sm-12 job-seekers">
                            <h3 className="fl-heading">
                              <span
                                className="fl-heading-text myheadings"
                                style={{
                                  fontFamily:
                                    "Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                }}
                              >
                                For Seekers
                              </span>
                            </h3>
                            <div
                              className="fl-module fl-module-rich-text fl-node-5d7c1d1ca2315"
                              data-node="5d7c1d1ca2315"
                            >
                              <div className="fl-module-content fl-node-content">
                                <div className="fl-rich-text">
                                  <p>
                                    Join over <strong>2000+</strong> unemployed
                                    persons across the country and get connected
                                    to businesses ready to hire{" "}
                                  </p>
                                  <p>
                                    Easy way to make{" "}
                                    <strong>Money now!!!</strong>
                                  </p>
                                </div>
                                <div style={{ marginTop: "20px" }}>
                                  <button
                                
                                    style={{ textDecoration: "none" }}
                                    className="fl-button1"
                                    onClick={handleShow}
                                  >
                                    Get Started
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-6 background"
                      style={{
                        height: "500px",
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </body>
    </div>
  );
}

export default Index;
