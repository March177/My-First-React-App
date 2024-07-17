// src/Students.jsx
import React from "react";
import Student from "./Student";

const Students = () => {
  const students = [
    {
      name: "Rodulfo Mangila",
      department: "Science",
      finalGrade: 85,
      status: "Pass",
    },
    {
      name: "March Anthony Dela Pena",
      department: "Arts",
      finalGrade: 78,
      status: "Pass",
    },
    {
      name: "March Anton Dela Pena",
      department: "Commerce",
      finalGrade: 92,
      status: "Pass",
    },
    {
      name: "Vincent Oros",
      department: "Science",
      finalGrade: 70,
      status: "Pass",
    },
    { name: "Al Moranas", department: "Arts", finalGrade: 50, status: "Fail" },
    {
      name: "James Sismar",
      department: "Commerce",
      finalGrade: 88,
      status: "Pass",
    },
    {
      name: "Ariel Bul",
      department: "Science",
      finalGrade: 59,
      status: "Fail ",
    },
    {
      name: "March Anton ",
      department: "Arts",
      finalGrade: 62,
      status: "Pass",
    },
    {
      name: "Rodulfo Mangila",
      department: "Commerce",
      finalGrade: 100,
      status: "Pass",
    },
    {
      name: "Oros Vincent",
      department: "Science",
      finalGrade: 99,
      status: "Pass",
    },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} index={index} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
