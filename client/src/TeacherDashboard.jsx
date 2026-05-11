
import React, { useState, useEffect } from 'react';
import { getAllExams } from './api/examService';

const TeacherDashboard = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const data = await getAllExams();
        setExams(data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Teacher Dashboard</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {exams.map((exam) => (
            <div key={exam.id} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{exam.title}</h5>
                  <p className="card-text text-muted">ID: {exam.id}</p>
                  <p className="card-text">{exam.questions.length} Questions</p>
                  <button className="btn btn-outline-primary btn-sm">Manage Exam</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <button className="btn btn-primary">Create New Exam</button>
      </div>
    </div>
  );
};

export default TeacherDashboard;
