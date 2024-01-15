"use client";

import { HEADER_HEIGHT } from "@/constants/appVariables";
import { DUMMY_EXAM_DATA } from "@/constants/exams";
import { DASHBOARD_PATH } from "@/constants/routes";
import useExamStore from "@/stores/useExamStore";
import { Box, Typography } from "@mui/material";
import { IconChevronLeft } from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect } from "react";

const HeaderExam = () => {
  const { activeExam, setActiveExam, isStartExam } = useExamStore();

  const params = useParams<{ id: string }>();

  const initActiveExam = useCallback(() => {
    const currentExam = DUMMY_EXAM_DATA.find((exam) => exam.id === params.id);
    if (currentExam) {
      setActiveExam({
        date: currentExam.date,
        dueDate: currentExam.dueDate,
        duration: currentExam.duration,
        examType: currentExam.examType,
        id: currentExam.id,
        title: currentExam.title,
        totalQuestion: currentExam.totalQuestion,
      });
    }
  }, [params.id, setActiveExam]);

  useEffect(() => {
    initActiveExam();
  }, [initActiveExam]);
  return (
    <Box
      component="header"
      className="fixed top-0 flex items-center justify-between w-full p-3 bg-background-default"
      sx={{ height: HEADER_HEIGHT }}
    >
      <Link href={isStartExam ? "" : DASHBOARD_PATH}>
        <Box
          className={classNames(
            "flex items-center gap-1 py-1 pl-1 pr-2 rounded-lg",
            {
              "hover:bg-primary-light/20 hover:cursor-pointer": !isStartExam,
              "hover:cursor-default": isStartExam,
            }
          )}
        >
          {!isStartExam && (
            <IconChevronLeft size={18} className="text-primary-main" />
          )}
          <Typography variant="body1" color="primary.main">
            Exam -
          </Typography>
          <Typography variant="h5">{activeExam.title}</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default HeaderExam;
