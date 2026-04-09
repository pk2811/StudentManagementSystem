import React, { Children, createContext, lazy, Suspense, useReducer } from "react";
import Student from "./StudentForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewStudents from "./ViewStudents";
import "./App.css"
import StudentProfile from "./StudentProfile";
import Login from "./Login";

export const myContext = createContext();
const initialState = {
  students: [],
  form: {
    name: "",
    email: "",
    dateOfBirth: "",
    degree: "",
    gender:"",
    attendance:"",
  totalMarks:"",
  obtainedMarks:""
  },
  filteredStudents:[],
  editId: null,
  selectedStudent: {}
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_STUDENTS":
      return { ...state, students: action.payload  ,
        filteredStudents:action.payload
      };

    case "UPDATE_FIELD":
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value
        },
      };

    case "RESET_FORM":
      return {
        ...state,
        form: { name: "", email: "", dateOfBirth: "", degree: "" },
        editId: null,
      };

    case "SET_EDIT":
      return {
        ...state,
        form: action.payload,
        editId: action.id,
      };

      case "FILTERED_DATA":
        return{
          ...state,filteredStudents:action.payload
        };

        case "SET_SELECTED_STUDENT":
          return {
            ...state,selectedStudent:action.payload
          }

    default:
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const myRouter =
    createBrowserRouter([
      {
        path: "/",
        element: <Student></Student>,
      },{
        path:"/login",
        element:<Login></Login>

      },
      {
        path: "/viewStudents",
        element: <ViewStudents></ViewStudents>,
      },
       {
        path: "/viewStudent",
        element: <StudentProfile></StudentProfile>,
      }
    ]);

  return (
    <myContext.Provider value={{ state, dispatch }}>
      <RouterProvider router={myRouter} />
    </myContext.Provider>
  );
}

export default App;
