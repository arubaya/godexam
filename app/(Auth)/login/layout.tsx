"use client";

import LoadingState from "@/components/molecules/LoadingState";
import useUserRoute from "@/hooks/useUserRoute";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useUserRoute();
  return (
    <Box component="main" className="w-full min-h-screen">
      {loading ? <LoadingState fullScreen withProgress /> : children}
    </Box>
  );
}
