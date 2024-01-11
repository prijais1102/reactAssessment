import axios from "axios";
import React, { useContext, useState } from "react";
import StudentContext from "./context";
let temp=0,gen=0;
function AddStudent() {
  const { formData, setFormData } = useContext(StudentContext);
  // const student=useContext(StudentContext);
  console.log(formData.length);
  const [newStudent, setNewStudent] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    mobileNumber: "",
  });

  const validMobile = () => {
    if (newStudent.mobileNumber.length === 0) {
      document.getElementById("validMobile").innerHTML="Enter mobile number";
    } else if (newStudent.mobileNumber.length !== 10) {
      document.getElementById("validMobile").innerHTML="Enter 10-digit mobile number";
    }
    else{
      document.getElementById("validMobile").innerHTML="";
    }
  };
  const validGender = () => {
    gen=0;
    if(document.getElementById("male").checked != true && document.getElementById("female").checked != true )
    {
      document.getElementById("validGender").innerHTML="Enter Gender";
      gen=1;
    }
    else{
      document.getElementById("validGender").innerHTML="";
    }
  }
  const validName = () => {
    
    if (newStudent.name === "") {
      document.getElementById("validName").innerHTML="Enter Name";;
    } 
    else if(newStudent.name!=="")
    {
      temp=0;
      for (let i = 0; i < newStudent.name.length; i++) {
        if (!isNaN(newStudent.name[i])) {
          document.getElementById("validName").innerHTML="Enter valid Name";
          temp=1;
          break;
        }
        
      }
    }
    if(temp==0){
      document.getElementById("validName").innerHTML="";
    }
  };
  const validDob = () => {
    if (newStudent.dob === "") {
      document.getElementById("validDob").innerHTML="Enter Dob";
    }
    else{
      document.getElementById("validDob").innerHTML="";
    }
  };
  const validAddress = () => {
    if (newStudent.address === "") {
      document.getElementById("validAddress").innerHTML="Enter Address";
    }
    else{
      document.getElementById("validAddress").innerHTML="";
    }
  };
  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
    validName();
    validDob();
    validGender();
    validAddress();
    validMobile();
  };
  const submitHandler = (e) => {
    e.preventDefault();
    validName();
    validDob();
    validGender();
    validAddress();
    validMobile();
    
    
    if (
      newStudent.name !== "" &&
      newStudent.dob !== "" &&
      newStudent.gender !== "" &&
      newStudent.address !== "" &&
      newStudent.mobileNumber !== "" &&
      newStudent.mobileNumber.length === 10 && temp==0 && gen==0)
     {
      axios.post("http://localhost:8000/student", newStudent);
       formData.push(newStudent);
      document.getElementById("result").innerHTML="Student Added";
    }
  };

  return (
    <div className="container d-center">
      <h2 className="text-center">Add Student</h2>
      <div className="justify-content-center d-flex">
      <form onSubmit={submitHandler}>
      <table className="border border-success border border-5 ">
        <tr>
          <td>
            <label className="text-align-left">Name: </label>
          </td>
          <td>
            <input
              className="form-control"
              type="text"
              name="name"
              value={newStudent.name}
              onChange={handleInputChange}
            />
          </td>
          <span id="validName"></span>
        </tr>
        <tr>
          <td>
            <label>DOB: </label>
          </td>
          <td>
            <input
              className="form-control"
              type="date"
              name="dob"
              value={newStudent.dob}
              onChange={handleInputChange}
            />
          </td>
          <span id="validDob"></span>
        </tr>
        <tr>
          <td>
            <label>Gender: </label>
          </td>
          <td>
              <input
                id="male"
                type="radio"
                name="gender"
                value="Male"
                onChange={handleInputChange}
              />
              Male
              <input
                id="female"
                type="radio"
                name="gender"
                value="Female"
                onChange={handleInputChange}
              />
              Female
          </td>
          <span id="validGender"></span>
        </tr>
        <tr>
          <td>
            <label>Address: </label>
          </td>
          <td>
            <input
              className="form-control "
              type="text"
              name="address"
              value={newStudent.address}
              onChange={handleInputChange}
            />
          </td>
          <span id="validAddress"></span>
        </tr>
        <tr>
          <td>
            <label>Mobile Number: </label>
          </td>
          <td>
            <input
              className="form-control "
              type="number"
              name="mobileNumber"
              value={newStudent.mobileNumber}
              onChange={handleInputChange}
            />
          </td>
          <span id="validMobile"></span>
        </tr>
        <tr style={{marginLeft:175}}className="d-flex justify-content-center">
          <td >
          <button type="submit" onSubmit={submitHandler}>Submit</button>
          </td>
        </tr>
      </table>
      </form>
    </div>
    <div className="d-flex justify-content-center">
    <h1 id="result"></h1>
    </div>
    </div>
  );
}

export default AddStudent;
