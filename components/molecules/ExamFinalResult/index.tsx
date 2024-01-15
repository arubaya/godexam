"use client";

import Card from "@/components/atoms/Card";
import { Box, Typography } from "@mui/material";
import { IconSquareCheck, IconSquareX } from "@tabler/icons-react";
import React from "react";

interface ExamFinalResultProps {
  currentAnswer?: {
    answer: string;
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    isCorrect: boolean;
  }[];
}

const ExamFinalResult = ({ currentAnswer }: ExamFinalResultProps) => {
  return (
    <Card className="flex-1">
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
              <Box className="flex gap-2 items-center">
                <Typography className="font-semibold">
                  {question.answer}
                </Typography>
                {question.isCorrect ? (
                  <IconSquareCheck size={18} className="text-green-500" />
                ) : (
                  <IconSquareX size={18} className="text-red-500" />
                )}
              </Box>
            </Box>
            <Box className=" flex md:gap-2 flex-col md:flex-row mt-2">
              <Typography>Correct answer: </Typography>
              <Typography className="font-semibold" color="secondary.main">
                {question.correctAnswer}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default ExamFinalResult;
