import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActiveExamQuestionListCard from "@/components/molecules/ActiveExamQuestionListCard";
import useExamStore from "@/stores/useExamStore";
import { DUMMY_EXAM_DATA } from "@/constants/exams";

jest.mock("dayjs", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    format: jest.fn(() => "01:30"), // Mock the format method for dayjs
  })),
}));

jest.mock("@/stores/useExamStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockedUseExamStore = useExamStore as jest.Mock;

const mockRouterReplace = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: mockRouterReplace,
  }),
}));

const dummyQuestionList = [
  { id: "1", text: "Question 1" },
  { id: "2", text: "Question 2" },
  { id: "3", text: "Question 3" },
];

const mockActiveExam = { id: "123", questions: dummyQuestionList };
const mockSetCurrentQuestionId = jest.fn();
const mockSetPagination = jest.fn();
const mockSetRunningTime = jest.fn();

beforeEach(() => {
  mockedUseExamStore.mockReturnValue({
    activeExam: mockActiveExam,
    setCurrentQuestionId: mockSetCurrentQuestionId,
    currentQuestionId: "1",
    setPagination: mockSetPagination,
    runningTime: 90000, // 1 minute and 30 seconds
    setRunningTime: mockSetRunningTime,
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("ActiveExamQuestionListCard Component", () => {
  test("renders question list and time remaining", () => {
    render(<ActiveExamQuestionListCard />);

    // Check if time remaining is displayed
    expect(screen.getByText("Time remaining: 01:30")).toBeInTheDocument();

    // Check if question list is rendered
    dummyQuestionList.forEach((question) => {
      expect(screen.getByText(question.text)).toBeInTheDocument();
    });
  });

  test("handles choosing active question", async () => {
    render(<ActiveExamQuestionListCard />);

    const questionButton = screen.getByText("Question 2");

    act(() => {
      userEvent.click(questionButton);
    });

    expect(mockSetCurrentQuestionId).toHaveBeenCalledWith("2");
  });

  test("updates time remaining and redirects on timer expiration", async () => {
    jest.useFakeTimers();
    render(<ActiveExamQuestionListCard />);

    // Fast forward time to trigger timer expiration
    act(() => {
      jest.advanceTimersByTime(90000); // 1 minute and 30 seconds
    });

    expect(mockSetRunningTime).toHaveBeenCalledWith(0);
    expect(mockRouterReplace).toHaveBeenCalledWith("/exam-result/123");

    jest.useRealTimers();
  });
});
