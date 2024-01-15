import ExamItem from "@/components/molecules/ExamItem";
import { DUMMY_EXAM_DATA } from "@/constants/exams";
import { Box, Paper, Typography } from "@mui/material";
import { IconAwardFilled, IconCalendarFilled } from "@tabler/icons-react";
import dayjs from "dayjs";
import React, { useMemo } from "react";

const DashboardPage = () => {
  const currentExam = useMemo(
    () => DUMMY_EXAM_DATA.filter((_, index) => index <= 2),
    []
  );
  return (
    <Box className="flex flex-col gap-10">
      <Paper
        className="flex flex-col md:flex-row md:h-[120px] justify-between gap-2 p-4 border-2 border-white border-solid shadow-lg rounded-xl"
        elevation={0}
      >
        <Box className="flex flex-col justify-center flex-1 p-5">
          <Typography variant="body2" className="mb-2">
            Today,
          </Typography>
          <Typography variant="h2" color="primary.main">
            {dayjs().format("dddd")}
          </Typography>
          <Typography variant="caption">
            {dayjs().format("D MMMM YYYY")}
          </Typography>
        </Box>
        <Box className="flex flex-col justify-center flex-1 gap-2 p-5 border-solid md:items-center border-x-0 md:border-x border-neutral-200 border-y md:border-y-0">
          <Box className="flex items-center gap-2">
            <IconCalendarFilled className="text-secondary-main" size={18} />
            <Typography variant="caption">Total Current Exam</Typography>
          </Box>
          <Typography className="text-2xl font-semibold">
            {currentExam.length} Exams
          </Typography>
        </Box>
        <Box className="flex flex-col justify-center flex-1 gap-2 p-5 md:items-center">
          <Box className="flex items-center gap-2">
            <IconAwardFilled className="text-secondary-main" size={18} />
            <Typography variant="caption">Average Score</Typography>
          </Box>
          <Typography className="text-2xl font-semibold">
            87.5 Points
          </Typography>
        </Box>
      </Paper>

      <Box className="flex flex-col w-full gap-3">
        <Typography variant="h3">Today&apos;s Exam</Typography>
        <Box className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-3">
          {currentExam.map((exam) => (
            <ExamItem
              key={exam.id}
              id={exam.id}
              title={exam.title}
              examType={exam.examType}
              duration={exam.duration}
              date={exam.date}
              totalQuestion={exam.totalQuestion}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
