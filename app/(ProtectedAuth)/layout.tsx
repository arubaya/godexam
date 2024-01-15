"use client";

import LoadingState from "@/components/molecules/LoadingState";
import useProtectedRoute from "@/hooks/useProtectedRoute";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useProtectedRoute();
  return loading ? <LoadingState fullScreen withProgress /> : children;
}
