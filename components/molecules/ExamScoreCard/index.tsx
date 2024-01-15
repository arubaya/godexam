import Card from "@/components/atoms/Card";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useMemo } from "react";

interface ExamScoreCardProps {
  totalCorrectAnswer: number;
  totalQuestion: number;
}

const ExamScoreCard = ({
  totalCorrectAnswer,
  totalQuestion,
}: ExamScoreCardProps) => {
  const totalScore = useMemo(() => {
    return ((totalCorrectAnswer / totalQuestion) * 100).toFixed();
  }, [totalCorrectAnswer, totalQuestion]);

  return (
    <Card className="w-full md:w-[400px] gap-4">
      <Box className="flex flex-col gap-1">
        <Typography className="font-semibold">Submited Date: </Typography>
        <Typography className="text-base">
          {dayjs().format("DD MMMM YYYY")}
        </Typography>
      </Box>
      <Box className="w-full flex flex-col md:flex-row">
        <Box className="flex flex-col flex-1 items-center justify-center h-32 p-3 gap-2">
          <Typography className="text-base">Total Question</Typography>
          <Typography className="text-2xl font-bold">
            {totalQuestion}
          </Typography>
        </Box>
        <Box className="flex flex-col flex-1 items-center justify-center h-32 p-3 gap-2">
          <Typography className="text-base">Correct Answer</Typography>
          <Typography className="text-2xl font-bold" color="primary.main">
            {totalCorrectAnswer}
          </Typography>
        </Box>
      </Box>
      <Box className="flex flex-col flex-1 items-center justify-center h-32 p-3 gap-2 border-0 border-t border-solid border-neutral-200">
        <Typography className="text-xl">Your Score</Typography>
        <Typography className="text-4xl font-bold" color="secondary.main">
          {totalScore}
        </Typography>
      </Box>
    </Card>
  );
};

export default ExamScoreCard;
