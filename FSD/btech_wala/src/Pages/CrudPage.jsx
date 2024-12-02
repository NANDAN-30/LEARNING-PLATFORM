import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CrudPage = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    Email: '',
    FirstName: '',
    LastName: '',
    RollNo: '',
    Course: '',
  });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [alert, setAlert] = useState({ message: '', className: '' });

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(savedStudents);
  }, []);

  useEffect(() => {
    if (alert.message) {
      const timeout = setTimeout(() => setAlert({ message: '', className: '' }), 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { Email, FirstName, LastName, RollNo, Course } = formData;

    if (!Email || !FirstName || !LastName || !RollNo || !Course) {
      setAlert({ message: 'Please fill in all fields', className: 'danger' });
    } else {
      const updatedStudents = [...students];
      if (selectedIndex === null) {
        updatedStudents.push(formData);
        setAlert({ message: 'Student Added', className: 'success' });
      } else {
        updatedStudents[selectedIndex] = formData;
        setAlert({ message: 'Student Info Updated', className: 'info' });
      }
      setStudents(updatedStudents);
      saveStudents(updatedStudents);
      setFormData({ Email: '', FirstName: '', LastName: '', RollNo: '', Course: '' });
      setSelectedIndex(null);
    }
  };

  const handleEdit = (index) => {
    setFormData(students[index]);
    setSelectedIndex(index);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
    setAlert({ message: 'Student Data Deleted', className: 'danger' });
  };

  const saveStudents = (updatedStudents) => {
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <div className="container mt-5">
      <div className="main">
        {alert.message && (
          <div className={`alert alert-${alert.className} text-center`} role="alert">
            {alert.message}
          </div>
        )}
        <h1 className="text-center mb-4">Student Management System</h1>
        <form id="student-form" onSubmit={handleFormSubmit} className="mb-4">
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                value={formData.FirstName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                value={formData.LastName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="RollNo"
                placeholder="Roll No"
                value={formData.RollNo}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="Course"
                placeholder="Course"
                value={formData.Course}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {selectedIndex === null ? 'Add Student' : 'Update Student'}
          </button>
        </form>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Roll No</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.Email}</td>
                <td>{student.FirstName}</td>
                <td>{student.LastName}</td>
                <td>{student.RollNo}</td>
                <td>{student.Course}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm mr-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudPage;
