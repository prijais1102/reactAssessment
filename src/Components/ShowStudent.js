import axios from 'axios';
import React, {useContext,useEffect} from 'react';
import { Card } from "react-bootstrap";
import StudentContext from './context'; 
import {useState} from 'react';

function ShowStudent() {
  const {formData} = useContext(StudentContext);
  // alert(formData.length)
  console.log("Length ui");
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/student");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="justify-content-center d-flex">
    <Card style={{ width: "18rem",textAlign:"center",backgroundColor:"lightpink" }}>
      <Card.Body>
        {students.map((student) => (
          <div key={student.id}>
            <Card.Title >ID: {student.id}</Card.Title>
            <Card.Text style={{color:"white"}}>Name: {student.name}</Card.Text>
            <Card.Text>DOB: {student.dob}</Card.Text>
            <Card.Text>Gender: {student.gender}</Card.Text>
            <Card.Text>Address: {student.address}</Card.Text>
            <Card.Text>Mobile No: {student.mobileNumber}</Card.Text>
          </div>
        ))}
    </Card.Body>
    </Card>
    <Card style={{ width: "18rem",textAlign:"center",backgroundColor:"lightpink" }}>
      <Card.Body>
        {formData.map((student) => (
          <div>
            {/* <Card.Title >ID: {student.id}</Card.Title> */}
            <Card.Text style={{color:"white"}}>Name: {student.name}</Card.Text>
            <Card.Text>DOB: {student.dob}</Card.Text>
            <Card.Text>Gender: {student.gender}</Card.Text>
            <Card.Text>Address: {student.address}</Card.Text>
            <Card.Text>Mobile No: {student.mobileNumber}</Card.Text>
          </div>
        ))}
      </Card.Body>
    </Card>
    </div>
  );
}

export default ShowStudent;
