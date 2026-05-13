import React from 'react';

const ExamQuestions = ({ exam, onBack }) => {
  if (!exam) return null;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">{exam.title}</h2>
          <p className="text-muted mb-0">Exam ID: {exam.id}</p>
        </div>
        <button className="btn btn-outline-secondary" onClick={onBack}>
          <i className="bi bi-arrow-left me-2"></i>
          Back to Dashboard
        </button>
      </div>

      <div className="row">
        <div className="col-12">
          {exam.questions && exam.questions.length > 0 ? (
            <div className="list-group">
              {exam.questions.map((q, index) => (
                <div key={q.id || index} className="list-group-item list-group-item-action mb-3 border shadow-sm rounded p-4">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-3 text-primary">Question {index + 1}</h5>
                  </div>
                  <p className="mb-4 fs-5">{q.text}</p>
                  <div className="row g-3">
                    {q.options.map((option, optIndex) => (
                      <div key={optIndex} className="col-md-6">
                        <div className={`p-3 border rounded ${optIndex === q.correct ? 'bg-success bg-opacity-10 border-success' : 'bg-light'}`}>
                          <div className="d-flex justify-content-between align-items-center">
                            <span>{option}</span>
                            {optIndex === q.correct && (
                              <span className="badge bg-success">Correct Answer</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5 border rounded bg-light">
              <p className="text-muted mb-0">No questions found for this exam.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamQuestions;
