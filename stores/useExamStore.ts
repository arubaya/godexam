import { create } from "zustand";

type ExamStoreState = {
  activeExam: ActiveExam;
  isAgreeRule: boolean;
};

type ExamStoreAction = {
  setActiveExam: (exam: ActiveExam) => void;
  setAgreeRule: (isAgreeRule: boolean) => void;
};

type ExamStore = ExamStoreState & ExamStoreAction;

const INIT_GLOBAL_STATE: ExamStoreState = {
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
};

const useExamStore = create<ExamStore>((set) => ({
  ...INIT_GLOBAL_STATE,
  setActiveExam: (exam) => set({ activeExam: exam }),
  setAgreeRule: (isAgreeRule) => set({ isAgreeRule }),
}));

export default useExamStore;
