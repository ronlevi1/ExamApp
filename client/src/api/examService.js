
import { mockExams } from './mockDb';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getAllExams = async () => {
  await delay(500);
  return [...mockExams];
};

export const getExamById = async (id) => {
  await delay(500);
  return mockExams.find(exam => exam.id === id) || null;
};

export const createExam = async (exam) => {
  await delay(500);
  const newExam = { ...exam, id: Math.random().toString(36).substr(2, 9) };
  mockExams.push(newExam);
  return newExam;
};
