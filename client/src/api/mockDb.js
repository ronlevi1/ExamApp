
export const mockExams = [
  {
    id: '1',
    title: 'JavaScript Basics',
    questions: [
      { id: 'q1', text: 'What is a closure?', options: ['A function with its lexical environment', 'A way to close a file', 'A loop'], correct: 0 },
      { id: 'q2', text: 'What is JSX?', options: ['A CSS framework', 'A syntax extension for JavaScript', 'A database'], correct: 1 }
    ]
  },
  {
    id: '2',
    title: 'React Hooks',
    questions: [
      { id: 'q1', text: 'What does useEffect do?', options: ['Manages side effects', 'Creates state', 'Styles components'], correct: 0 },
      { id: 'q2', text: 'What is the rule of hooks?', options: ['Only call at top level', 'Call inside loops', 'Call inside classes'], correct: 0 }
    ]
  }
];

export const mockScores = [
  { studentName: 'Alice', examId: '1', score: 90 },
  { studentName: 'Bob', examId: '1', score: 75 }
];
