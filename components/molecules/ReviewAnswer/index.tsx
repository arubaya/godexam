import { DUMMY_EXAM_DATA } from "@/constants/exams";
import useExamStore from "@/stores/useExamStore";
import { Box, Button, Typography } from "@mui/material";
import React, { useMemo } from "react";

interface ReviewAnswerProps {
  onSubmit: () => void;
}

const ReviewAnswer = ({ onSubmit }: ReviewAnswerProps) => {
  const { activeExam, answeredQuestions } = useExamStore();
  const currentAnswer = useMemo(() => {
    const currentQuestions = DUMMY_EXAM_DATA.find(
      (dummyExam) => dummyExam.id === activeExam.id
    )?.questions;
    if (currentQuestions) {
      return currentQuestions.map((question) => {
        const answer = answeredQuestions.find(
          (answeredQuestion) => answeredQuestion.id === question.id
        )?.answer;
        return {
          ...question,
          answer: answer || "-",
        };
      });
    }
  }, [activeExam.id, answeredQuestions]);

  const handleSubmit = () => onSubmit();
  return (
    <Box className="w-full flex flex-col gap-3">
      {currentAnswer?.map((question, index) => (
        <Box key={question.id} className="">
          <Box className=" flex md:gap-2 flex-col md:flex-row">
            <Typography className="font-semibold">
              Question {index + 1}:{" "}
            </Typography>
            <Typography>{question.question}</Typography>
          </Box>
          <Box className=" flex md:gap-2 flex-col md:flex-row mt-2">
            <Typography>Your answer: </Typography>
            <Typography className="font-semibold" color="secondary.main">
              {question.answer}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box className="flex justify-end mt-4">
        <Button variant="contained" onClick={handleSubmit}>
          Submit Answer
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewAnswer;
