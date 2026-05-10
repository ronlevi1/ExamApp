
import React, { useState } from 'react';
import { getExamById } from './api/examService';

const StudentPortal = () => {
  const [examId, setExamId] = useState('');
  const [exam, setExam] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!examId.trim()) return;

    setLoading(true);
    setError('');
    setExam(null);

    try {
      const data = await getExamById(examId);
      if (data) {
        setExam(data);
      } else {
        setError('Exam not found. Please check the ID.');
      }
    } catch (err) {
      setError('An error occurred while fetching the exam.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Student Portal</h2>
      <div className="card p-4 shadow-sm mb-4">
        <form onSubmit={handleSearch} className="row g-3">
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Exam ID (e.g. 1)"
              value={examId}
              onChange={(e) => setExamId(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Searching...' : 'Start Exam'}
            </button>
          </div>
        </form>
        {error && <div className="mt-3 text-danger">{error}</div>}
      </div>

      {exam && (
        <div className="card shadow-sm border-success">
          <div className="card-body">
            <h3 className="card-title text-success">Ready to start: {exam.title}</h3>
            <p className="card-text">Total Questions: {exam.questions.length}</p>
            <button className="btn btn-success">Begin Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentPortal;
