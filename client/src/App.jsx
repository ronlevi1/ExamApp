
import React, { useState } from 'react';
import TeacherDashboard from './TeacherDashboard';
import StudentPortal from './StudentPortal';
import './App.css';

function App() {
  const [role, setRole] = useState('teacher'); // 'teacher' or 'student'

  const toggleRole = () => {
    setRole(prevRole => (prevRole === 'teacher' ? 'student' : 'teacher'));
  };

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-dark mb-4 shadow">
        <div className="container">
          <span className="navbar-brand mb-0 h1">E-Test System</span>
          <div className="d-flex align-items-center">
            <span className="text-light me-3">View as: <strong>{role.charAt(0).toUpperCase() + role.slice(1)}</strong></span>
            <button className="btn btn-outline-info btn-sm" onClick={toggleRole}>
              Switch to {role === 'teacher' ? 'Student' : 'Teacher'}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {role === 'teacher' ? <TeacherDashboard /> : <StudentPortal />}
      </main>

      <footer className="mt-5 py-3 text-center text-muted border-top">
        <div className="container">
          <small>&copy; 2026 E-Test System Mock Environment</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
