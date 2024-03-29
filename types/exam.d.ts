type Question = {
  id: string;
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

type ActiveExam = Omit<Exam, "questions">;

type ExamRule = {
  id: number;
  ruleTitle: string;
  rules: string[];
};
