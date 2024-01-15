"use client";

import LoadingState from "@/components/molecules/LoadingState";
import { DASHBOARD_PATH } from "@/constants/routes";
import useProtectedRoute from "@/hooks/useProtectedRoute";

export default function Home() {
  useProtectedRoute(DASHBOARD_PATH);
  return <LoadingState fullScreen withProgress />;
}
