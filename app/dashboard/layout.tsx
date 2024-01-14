import {
  HEADER_DASHBOARD_HEIGHT,
  SIDEBAR_WIDTH,
} from "@/constants/appVariables";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

import { APP_LOGO_MINI } from "@/constants/appIdentity";
import { IconAd2, IconLayoutDashboard, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { DASHBOARD_PATH, MY_EXAM_PATH } from "@/constants/routes";
import SidebarNavigation from "@/components/organisms/SidebarNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box component="main" className="flex w-full min-h-screen">
      {/* Sidebar */}
      <SidebarNavigation />
      <Box
        component="div"
        className="flex flex-col min-h-screen"
        sx={{
          marginLeft: `${SIDEBAR_WIDTH}px`,
          width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        }}
      >
        <Box
          component="header"
          className="fixed flex items-center justify-between p-6"
          sx={{
            height: `${HEADER_DASHBOARD_HEIGHT}px`,
            width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
          }}
        >
          <Box component="div" className="flex flex-col">
            <Typography variant="caption">Exam</Typography>
            <Typography variant="h2" component="h2" fontWeight={700}>
              Dashboard
            </Typography>
          </Box>
          <Box component="div" className="flex items-center gap-3">
            <Box component="div" className="flex items-center gap-1">
              <Typography>Hi,</Typography>
              <Typography>User</Typography>
            </Box>
            <Avatar sx={{ width: 30, height: 30 }}>
              <IconUser size={20} />
            </Avatar>
          </Box>
        </Box>
        <Box
          component="main"
          className="w-full h-full px-6 py-4"
          sx={{
            marginTop: `${HEADER_DASHBOARD_HEIGHT}px`,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
