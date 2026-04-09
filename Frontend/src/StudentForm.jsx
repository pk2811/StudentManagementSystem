import React, { createContext, useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentForm.css";
import { myContext } from "./App";
import { Label } from "recharts";
import toast from "react-hot-toast";


function StudentForm() {
  const { state, dispatch } = useContext(myContext);
  const navigate = useNavigate();

  const loadStudents = async () => {
    const res = await fetch("http://localhost:8080/students");
    const data = await res.json();
    dispatch({ type: "SET_STUDENTS", payload: data });
  };

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });

   
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     console.log(state);
    if (state.editId) {
     const res= await fetch(`http://localhost:8080/students/${state.editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.form),
      });


 if (!res.ok) {
      t
    } else {
      dispatch({ type: "RESET_FORM" });
      navigate("/viewStudents");
    }

    } else {
      const res=await fetch("http://localhost:8080/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.form),
      });
       const data=await res.json();
       
       toast.success("Student Added Successfully ✅")
      dispatch({ type: "RESET_FORM" });
      navigate("/viewStudents");
    
    }
   
  };

  return (
    <div className="outer">
      <div className="formContainer">
        <h2 className="title">Student Details Form</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="formIn"
            name="name"
            type="text"
            placeholder="Enter name"
            required
            value={state.form.name}
            onChange={handleChange}
          />
          <input
            className="formIn"
            name="email"
            type="email"
            placeholder="Enter email"
            required
            value={state.form.email}
            onChange={handleChange}
          />
          <input
            className="formIn"
            name="dateOfBirth"
            type="date"
            required
            value={state.form.dateOfBirth}
            onChange={handleChange}
          />
          <input
            className="formIn"
            name="degree"
            type="text"
            placeholder="Enter class/branch"
            required
            value={state.form.degree}
            onChange={handleChange}
          />
          <input
            className="formIn"
            name="obtainedMarks"
            type="number"
            placeholder="Enter obtained Mark"
            required
            value={state.form.obtainedMarks}
            onChange={handleChange}
          />
          <input
            className="formIn"
            name="totalMarks"
            type="number"
            placeholder="Enter totalMark"
            required
            value={state.form.totalMarks}
            onChange={handleChange}
          />
          <div className="gender">
           <label htmlFor="gender">Gender</label>
           <ul>
            <li> <input type="radio" name="gender" id="male" value={"male"} checked ={state.form.gender??"male"} onChange={handleChange} /><p>Male</p></li>
            <li> <input type="radio" name="gender" id="female"  value={"female"} checked={state.form.gender??"female"} onChange={handleChange} /><p>Female</p></li>
            <li><input type="radio" name="gender" id="other" value={"other"} checked={state.form.gender??"other"} onChange={handleChange} /><p>Other</p></li>
           </ul>
         </div> 

          

          <button type="submit">
            {state.editId ? "update Student" : "Add Student"}
          </button>
        </form>

        <Link className="a" to="/viewStudents">
          ViewStudents
        </Link>
      </div>
    </div>
  );
}

export default StudentForm;
