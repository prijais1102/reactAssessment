import { useState } from 'react';
import Router1 from './Router1';
import StudentContext from './context';
function App() {
  // var student=[];
  const [formData,setFormData] =useState([]);
  return (
    <div>
      <StudentContext.Provider value={{formData, setFormData}} >
      {/* <StudentContext.Provider value={student}> */}
          <Router1/> 
      </StudentContext.Provider>
    </div>
  );
}

export default App;
