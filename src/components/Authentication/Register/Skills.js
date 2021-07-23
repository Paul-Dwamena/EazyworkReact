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

const Skills = (props) => {
  const { values, activeStep, isLastStep, handleBack, handleNext } = props;
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 500,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },

    Active: {
      backgroundColor: "orange",
    },
    Inactive: {
      backgroundColor: "grey",
    },
  }));

  const [salary, setSalary] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setSalary(event.target.value);
  };
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [selected, setSelected] = useState([]);
  const [skills, setSkills] = useState([
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

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
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
    // console.log(selected.item);
  };
  const updateSkillsArray = (index) => {
    let arr = skills;
    let old = skills[index];
    let update = {
      ...old,
      selected: !old.selected,
    };
    arr[index] = update;

    setSkills(arr);
  };

  return (
    <Container>
      <div className="mysection"
      >
        <div
          style={{ borderRadius: "3px", flexDirection: "row" }}
          className="box"
        >
          <div className="text-wrap2">
            <h3>What are your skills set?</h3>
          </div>
        <div className="row">
          <div className="col-md-8" style={{margin:"50px"}}>
            
              
              <p>
                Choose any 2 of the list provided below or choose{" "}
                <strong>LEAVE OPEN</strong> if you are unsure yet
              </p>

              <div className="row">
                {skills.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="col-3"
                      style={{
                        backgroundColor: item.selected ? "#198754" : "blue",
                        borderRadius: "5px",
                        margin: "10px",
                        padding: "15px",
                        color: "white",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleSelected(item, index)}
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
              <hr />
              <div>
                <h4>How much are you expecting to be your daily wages?</h4>
                <div className="row">
                  <div className="col-9">
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Salary Expectation
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={salary}
                        onChange={handleChange}
                      >
                        <MenuItem value="None">30-50</MenuItem>
                        <MenuItem value="Basic">50-70</MenuItem>
                        <MenuItem value="SHS Leaver">70-100</MenuItem>
                        <MenuItem value="Unviversity Graduate">100+</MenuItem>
                      </Select>
                    </FormControl>
                  
                  <div className="col-3">
                    <p style={{ fontWeight: "900", marginTop: "30px" }}>GHS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                margin: "55px",
                width: "80%",
                backgroundColor: "white",
                height: "400px",
              }}
            >
              <div style={{ padding: "25px" }}>
                <h4 style={{ textAlign: "center" }}>Important Notice</h4>
              </div>
              <div style={{ marginTop: "10px" }}>
                <ul>
                  <li style={{ paddingRight: "10px" }}>
                    Choosing your skills set will help us assign you to a better
                    job that matches your skills
                  </li>
                  <li style={{ marginTop: "20px", paddingRight: "10px" }}>
                    Choosing a higher wage can/might hinder you from getting
                    lots of job requests{" "}
                  </li>
                </ul>
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

export default Skills;
