import Card from "@/components/atoms/Card";
import { EXAM_PATH } from "@/constants/routes";
import { replaceString } from "@/utils/helper";
import { Box, Button, Typography } from "@mui/material";
import {
  IconBook2,
  IconCalendar,
  IconClock,
  IconFileSpreadsheet,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

interface ExamItemProps {
  id: string;
  title: string;
  examType: string;
  duration: string;
  totalQuestion: number;
  date: string;
}

const ExamItem = ({
  date,
  duration,
  examType,
  id,
  title,
  totalQuestion,
}: ExamItemProps) => {
  return (
    <Card className="min-w-[270px]">
      <Box className="flex items-center gap-2">
        <IconFileSpreadsheet size={50} className="text-primary-main" />
        <Box className="flex flex-col">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="caption">{examType}</Typography>
        </Box>
      </Box>
      <Box className="flex flex-col gap-2 px-2 md:gap-3 md:flex-row">
        <Box className="flex items-center gap-2">
          <IconCalendar size={15} className="text-primary-main" />
          <Typography variant="caption">
            {dayjs(date, "YYYY-MM-DD").format("D MMMM YYYY")}
          </Typography>
        </Box>
        <Box className="flex items-center gap-2">
          <IconClock size={15} className="text-secondary-main" />
          <Typography variant="caption">{duration}</Typography>
        </Box>
        <Box className="flex items-center gap-2">
          <IconBook2 size={15} className="text-orange-500" />
          <Typography variant="caption">
            {totalQuestion} {totalQuestion > 1 ? "questions" : "question"}
          </Typography>
        </Box>
      </Box>
      <Link
        href={replaceString(EXAM_PATH, {
          id,
        })}
      >
        <Button color="secondary" size="small">
          Start Exam
        </Button>
      </Link>
    </Card>
  );
};

export default ExamItem;
