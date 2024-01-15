type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type Exam = {
  id: string;
  title: string;
  examType: string;
  duration: string;
  totalQuestion: number;
  questions: Array<Question>;
  date: string;
  dueDate: string;
};
