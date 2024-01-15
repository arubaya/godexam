import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ExamStoreState = {
  activeExam: ActiveExam;
  isAgreeRule: boolean;
  isStartExam: boolean;
  runningTime: number;
  answeredQuestions: Array<{ id: string; answer: string }>;
  currentQuestionId: string;
  pagination: {
    beforeQuestionId: string;
    nextQuestionId: string;
    isLastQuestion: boolean;
  };
};

type ExamStoreAction = {
  setActiveExam: (exam: ActiveExam) => void;
  setAgreeRule: (isAgreeRule: boolean) => void;
  setStartExam: (isStartExam: boolean) => void;
  setRunningTime: (runningTime: number) => void;
  setCurrentQuestionId: (id: string) => void;
  setAnsweredQuestion: (id: string, answer: string) => void;
  setPagination: (pagination: ExamStoreState["pagination"]) => void;
  resetExamStore: () => void;
};

type ExamStore = ExamStoreState & ExamStoreAction;

const INIT_EXAM_STATE: ExamStoreState = {
  activeExam: {
    id: "",
    title: "",
    examType: "",
    duration: "",
    totalQuestion: 0,
    date: "",
    dueDate: "",
  },
  isAgreeRule: false,
  answeredQuestions: [],
  isStartExam: false,
  runningTime: 1000 * 60 * 10, // 10 minute in milliseconds
  currentQuestionId: "",
  pagination: {
    beforeQuestionId: "",
    nextQuestionId: "",
    isLastQuestion: false,
  },
};

const useExamStore = create<ExamStore>()(
  persist(
    (set, get) => ({
      ...INIT_EXAM_STATE,
      setActiveExam: (exam) => set({ activeExam: exam }),
      setAgreeRule: (isAgreeRule) => set({ isAgreeRule }),
      setStartExam: (isStartExam) => set({ isStartExam }),
      setRunningTime: (runningTime) => set({ runningTime }),
      setCurrentQuestionId: (currentQuestionId) => set({ currentQuestionId }),
      setPagination: (pagination) => set({ pagination }),
      setAnsweredQuestion: (id: string, answer: string) => {
        const { answeredQuestions } = get();
        const findAnswerIndex = answeredQuestions.findIndex(
          (answer) => answer.id === id
        );
        const newAnsweredQuestions = produce(answeredQuestions, (draft) => {
          if (findAnswerIndex < 0) {
            draft.push({
              id,
              answer,
            });
          } else {
            draft[findAnswerIndex] = {
              id,
              answer,
            };
          }
        });
        set({ answeredQuestions: newAnsweredQuestions });
      },
      resetExamStore: () => set((state) => ({ ...state, ...INIT_EXAM_STATE })),
    }),
    {
      name: "godexam",
      partialize: (state) => ({
        activeExam: state.activeExam,
        answeredQuestions: state.answeredQuestions,
        isStartExam: state.isStartExam,
        runningTime: state.runningTime,
        currentQuestionId: state.currentQuestionId,
      }),
      skipHydration: true,
    }
  )
);

export default useExamStore;
