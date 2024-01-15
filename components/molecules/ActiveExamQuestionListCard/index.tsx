import Card from "@/components/atoms/Card";
import { DUMMY_EXAM_DATA } from "@/constants/exams";
import { EXAM_RESULT_PATH } from "@/constants/routes";
import useExamStore from "@/stores/useExamStore";
import { replaceString } from "@/utils/helper";
import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const ActiveExamQuestionListCard = () => {
  const router = useRouter();
  const {
    activeExam,
    setCurrentQuestionId,
    currentQuestionId,
    setPagination,
    runningTime,
    setRunningTime,
  } = useExamStore();

  const questionList = useMemo(
    () =>
      DUMMY_EXAM_DATA.find((dummyExam) => dummyExam.id === activeExam.id)
        ?.questions,
    [activeExam.id]
  );

  const countDownTimer = useMemo(() => {
    return dayjs(runningTime).format("mm:ss");
  }, [runningTime]);

  const setPaginationData = useCallback(() => {
    const currentQuestionIndex = questionList?.findIndex(
      (question) => question.id === currentQuestionId
    );
    if (
      currentQuestionIndex !== undefined &&
      questionList !== undefined &&
      currentQuestionIndex > -1
    ) {
      const beforeQuestion =
        currentQuestionIndex === 0
          ? ""
          : questionList[currentQuestionIndex - 1].id;
      const nextQuestion =
        currentQuestionIndex === questionList.length - 1
          ? ""
          : questionList[currentQuestionIndex + 1].id;
      setPagination({
        beforeQuestionId: beforeQuestion,
        nextQuestionId: nextQuestion,
        isLastQuestion: nextQuestion === "",
      });
    }
  }, [currentQuestionId, questionList, setPagination]);

  useEffect(() => {
    if (currentQuestionId === "" && questionList) {
      setCurrentQuestionId(questionList[0].id);
    }
    if (currentQuestionId !== "") {
      setPaginationData();
    }
  }, [
    currentQuestionId,
    questionList,
    setCurrentQuestionId,
    setPaginationData,
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (runningTime > 0) {
        setRunningTime(runningTime - 1000);
      } else {
        clearInterval(timer);
        router.replace(replaceString(EXAM_RESULT_PATH, { id: activeExam.id }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [activeExam.id, router, runningTime, setRunningTime]);

  const handleChooseActiveQuestion = (questionId: string) => {
    setCurrentQuestionId(questionId);
  };
  return (
    <Card className="min-w-[270px] md:w-[30%]">
      <Box className="flex items-center w-full gap-2">
        <Typography>Time remaining: {countDownTimer}</Typography>
        <Typography className="font-semibold"></Typography>
      </Box>
      <Box className=" grid grid-cols-[repeat(auto-fit,_minmax(40px,_40px))] gap-2">
        {questionList?.map((question, index) => (
          <Box
            key={question.id}
            component="button"
            onClick={() => handleChooseActiveQuestion(question.id)}
            className={classNames(
              "flex items-center justify-center  w-10 h-10 p-1 border border-solid rounded-md border-neutral-300 hover:cursor-pointer hover:bg-primary-main/10",
              {
                "bg-primary-main/40 ": question.id === currentQuestionId,
              }
            )}
          >
            {index + 1}
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default ActiveExamQuestionListCard;
