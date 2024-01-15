"use client";

import LoadingState from "@/components/molecules/LoadingState";
import { DASHBOARD_PATH } from "@/constants/routes";
import useExamStore from "@/stores/useExamStore";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ExamPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { isStartExam } = useExamStore();
  useEffect(() => {
    if (!isStartExam || !id) {
      router.replace(DASHBOARD_PATH);
    }
  });

  return <LoadingState withProgress fullScreen />;
};

export default ExamPage;
