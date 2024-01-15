import Card from "@/components/atoms/Card";
import { DUMMY_EXAM_DATA } from "@/constants/exams";
import useExamStore from "@/stores/useExamStore";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";

const OngoingExamCard = () => {
  const {
    currentQuestionId,
    activeExam,
    answeredQuestions,
    setAnsweredQuestion,
  } = useExamStore();
  const currentQuestion = useMemo(() => {
    const currentQuestions = DUMMY_EXAM_DATA.find(
      (dummyExam) => dummyExam.id === activeExam.id
    )?.questions;
    if (currentQuestions) {
      return currentQuestions.find(
        (question) => question.id === currentQuestionId
      );
    }
  }, [activeExam.id, currentQuestionId]);

  const currentQuestionNumber = useMemo(() => {
    const currentQuestions = DUMMY_EXAM_DATA.find(
      (dummyExam) => dummyExam.id === activeExam.id
    )?.questions;
    const currentQuestionIndex = currentQuestions?.findIndex(
      (question) => question.id === currentQuestionId
    );
    if (currentQuestionIndex !== undefined && currentQuestionIndex >= 0) {
      return currentQuestionIndex + 1;
    }
  }, [activeExam.id, currentQuestionId]);

  const currentAnswerdQuestion = useMemo(() => {
    return answeredQuestions.find((answer) => answer.id === currentQuestionId);
  }, [answeredQuestions, currentQuestionId]);

  const handleChooseAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;
    setAnsweredQuestion(currentQuestionId, answer);
  };
  return (
    <Card className="flex-1">
      <Box>
        <Typography>Question: {currentQuestionNumber}</Typography>
      </Box>
      {currentQuestion && (
        <Box component="form">
          <Typography>{currentQuestion.question}</Typography>
          <RadioGroup
            value={
              currentAnswerdQuestion !== undefined
                ? currentAnswerdQuestion.answer
                : ""
            }
            onChange={handleChooseAnswer}
          >
            {currentQuestion.options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </Box>
      )}
    </Card>
  );
};

export default OngoingExamCard;
