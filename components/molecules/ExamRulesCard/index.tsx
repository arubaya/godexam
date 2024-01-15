"use client";

import Card from "@/components/atoms/Card";
import { EXAM_RULES } from "@/constants/exams";
import useExamStore from "@/stores/useExamStore";
import { Box, Button, Typography } from "@mui/material";
import {
  IconBook2,
  IconCalendar,
  IconClock,
  IconFileSpreadsheet,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import React from "react";

const ExamRulesCard = () => {
  const { setAgreeRule, activeExam, setStartExam } = useExamStore();
  const handleAgreeRule = () => {
    setAgreeRule(true);
    setStartExam(true);
  };
  return (
    <Box className="flex flex-col w-full gap-2">
      <Card>
        <Typography color="secondary.main" variant="h5" className="font-bold">
          Exam Rules
        </Typography>
      </Card>
      <Card>
        <Box className="flex flex-col w-full gap-4 md:gap-2 md:flex-row">
          <Box className="flex flex-col min-w-[270px] self-stretch flex-1 h-full gap-4">
            <Box className="flex items-center gap-2">
              <IconFileSpreadsheet size={50} className="text-primary-main" />
              <Box className="flex flex-col">
                <Typography variant="h4">{activeExam.title}</Typography>
                <Typography variant="caption">{activeExam.examType}</Typography>
              </Box>
            </Box>
            <Box className="flex flex-col gap-2 px-2">
              <Box className="flex items-center gap-2">
                <IconCalendar size={20} className="text-primary-main" />
                <Typography variant="body1" className="font-semibold">
                  Date:
                </Typography>
                <Typography variant="body1">
                  {dayjs(activeExam.date, "YYYY-MM-DD").format("D MMMM YYYY")}
                </Typography>
              </Box>
              <Box className="flex items-center gap-2">
                <IconClock size={20} className="text-secondary-main" />
                <Typography variant="body1" className="font-semibold">
                  Duration:
                </Typography>
                <Typography variant="body1">{activeExam.duration}</Typography>
              </Box>
              <Box className="flex items-center gap-2">
                <IconBook2 size={20} className="text-orange-500" />
                <Typography variant="body1" className="font-semibold">
                  Question:
                </Typography>
                <Typography variant="body1">
                  {activeExam.totalQuestion}{" "}
                  {activeExam.totalQuestion > 1 ? "questions" : "question"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            {EXAM_RULES.map((examRule) => (
              <Box key={examRule.id} component="section">
                <Typography variant="h6" className="font-semibold">
                  {examRule.ruleTitle}
                </Typography>
                <Box component="ul" className="flex flex-col w-full gap-1 mt-2">
                  {examRule.rules.map((rule, index) => (
                    <Box key={index} component="li">
                      <Typography>{rule}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex items-center justify-end">
          <Button variant="contained" size="small" onClick={handleAgreeRule}>
            Agree & Start Exam
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ExamRulesCard;
