// src/Student.jsx
import React from "react";

const Student = ({ student, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{student.name}</td>
      <td>{student.department}</td>
      {student.status === "Pass" ? <td>{student.finalGrade}</td> : <td>-</td>}
      <td>{student.status}</td>
    </tr>
  );
};

export default Student;
