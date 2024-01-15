"use client";

import Card from "@/components/atoms/Card";
import ExamFinalResult from "@/components/molecules/ExamFinalResult";
import ExamScoreCard from "@/components/molecules/ExamScoreCard";
import { DUMMY_EXAM_DATA } from "@/constants/exams";
import useExamStore from "@/stores/useExamStore";
import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";

const ExamResult = () => {
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
          isCorrect: answer === question.correctAnswer,
        };
      });
    }
  }, [activeExam.id, answeredQuestions]);

  const totalCorrectAnswer = useMemo(() => {
    if (currentAnswer) {
      return currentAnswer.filter((question) => question.isCorrect).length;
    }
    return 0;
  }, [currentAnswer]);

  return (
    <Box className="flex flex-col w-full gap-2">
      <Card>
        <Typography color="secondary.main" variant="h5" className="font-bold">
          Exam Result
        </Typography>
      </Card>
      <Box className="w-full flex flex-col md:flex-row gap-3">
        <ExamScoreCard
          totalCorrectAnswer={totalCorrectAnswer}
          totalQuestion={activeExam.totalQuestion}
        />
        <ExamFinalResult currentAnswer={currentAnswer} />
      </Box>
    </Box>
  );
};

export default ExamResult;
