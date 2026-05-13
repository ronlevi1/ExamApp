
import React, { useState, useEffect } from 'react';
import { getAllExams } from './api/examService';
import ExamQuestions from './ExamQuestions';

const TeacherDashboard = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExam, setSelectedExam] = useState(null);

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

  if (selectedExam) {
    return (
      <ExamQuestions 
        exam={selectedExam} 
        onBack={() => setSelectedExam(null)} 
      />
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Teacher Dashboard</h2>
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {exams.map((exam) => (
            <div key={exam.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{exam.title}</h5>
                  <p className="card-text text-muted small mb-2">ID: {exam.id}</p>
                  <p className="card-text mb-4">
                    <span className="badge bg-info text-dark">
                      {exam.questions.length} Questions
                    </span>
                  </p>
                  <div className="mt-auto">
                    <button 
                      className="btn btn-outline-primary w-100"
                      onClick={() => setSelectedExam(exam)}
                    >
                      Manage Exam
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!loading && (
        <div className="mt-4 border-top pt-4">
          <button className="btn btn-primary px-4">
            <i className="bi bi-plus-lg me-2"></i>
            Create New Exam
          </button>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
