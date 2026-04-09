import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { myContext } from "./App";
import "./StudentProfile.css"
import { Link } from "react-router-dom";

function StudentProfile() {
  const { state } = useContext(myContext);

  const student = state.selectedStudent;

  if (!student || Object.keys(student).length === 0) {
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
        <p >No Student Selected !!</p>
        <br />
        <br />
      <Link to={"/ViewStudents"}>Select a student to view profile</Link>
    </div>
  );
}

 

  const chartData = [
    { name: "Present", value: student.attendance },
    { name: "Absent", value: 100 - student.attendance },
  ];

  const COLORS = ["#4CAF50", "#F44336"];
  const obMarks = student.obtainedMarks ?? 0;
  const total = student.totalMarks ?? 0;
  const percentage = (obMarks / total) * 100;

  const grade =
    percentage >= 90
      ? "A"
      : percentage >= 75
        ? "B"
        : percentage >= 50
          ? "C"
          : "Fail";

  return (
            <div>
  <div className="profile-wrapper">
<Link to={"/viewStudents"}><button className="back">back</button></Link>
 
  <div className="profile-card">
    <h2>{student.name}</h2>
    <p><b>Email:</b> {student.email}</p>
    <p><b>DOB:</b> {student.dateOfBirth}</p>
    <p><b>Degree:</b> {student.degree}</p>

    <p className={ Number(student.attendance) < 75 ? "low" : "good"}>
      Attendance: {student.attendance}%
    </p>
  </div>

  
  <div className="chart-card">
    <h3>Attendance</h3>
    <PieChart width={170} height={170}>
      <Pie data={chartData} dataKey="value" outerRadius={80}>
        {chartData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>
     
      <Tooltip/>
       <Legend/>
    </PieChart>
  </div>

 </div>


 <div className="marks-card">
  <h3>Marks</h3>
   <p>Obtained: {obMarks}</p>
  <p>Total: {total}</p>
 
  <p>Grade: {grade}</p>
 </div>
  </div>)
};


export default StudentProfile;
