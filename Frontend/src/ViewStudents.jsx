import React, { useContext, useEffect } from "react";
import { myContext } from "./App";
import { Link, useNavigate } from "react-router-dom";
import "./ViewStudents.css";
import toast from "react-hot-toast";

const ViewStudents = () => {
  const { state, dispatch } = useContext(myContext);

  const navigate = useNavigate();

  const deleteStudent = async (t) => {
    const confirmDel = window.confirm("Are you sure ?");

    if (!confirmDel) return;

    await fetch(`http://localhost:8080/students/${t.id}`, {
      method: "DELETE",
    });

    toast.success(`Student  ${t.name} deleted `)

    dispatch({
      type: "SET_STUDENTS",
      payload: state.students.filter((s) => s.id !== t.id),
    });
  };

  const loadStudents = async () => {
    const res = await fetch("http://localhost:8080/viewStudents");
    const data = await res.json();
    dispatch({ type: "SET_STUDENTS", payload: data });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const searchStudent = async (id) => {
    if (id === "" || id === undefined || id === null) {
      dispatch({
        type: "FILTERED_DATA",
        payload: state.students,
      });
      return;
    } else {
      const filteredData = state.students.filter((s) =>
        s.name.toLowerCase().includes(id.toLowerCase()),
      );

      dispatch({
        type: "FILTERED_DATA",
        payload: filteredData,
      });
    }
  };
  return (
    <div className="viewCont">
      <nav>
        <Link to={"/"}>Add Student</Link>
        <h2>Student List</h2>

        <input
          className="viewIn"
          type="text"
          placeholder="Search student name 🔍"
          onChange={(e) => {
            searchStudent(e.target.value);
          }}
        ></input>
      </nav>

      {!state.students || state.students.length === 0 ? (
        <p>Students not found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Student Id</th>
              <th>name</th>
              <th>email</th>
              
              <th>degree</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.filteredStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td className="profile"
                  onClick={() => {
                    dispatch({
                      type: "SET_SELECTED_STUDENT",
                      payload: s,
                    });
                    navigate(`/viewStudent`);
                  }}
                >
                  {s.name}
                </td>
                <td>{s.email}</td>
                
                <td>{s.degree}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SET_EDIT",
                        payload: s,
                        id: s.id,
                      });
                      navigate("/");
                    }}
                  >
                    Edit ✏️
                  </button>
                </td>
                <td>
                  <button id="delete" onClick={() => deleteStudent(s)

                    
                  }>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewStudents;
