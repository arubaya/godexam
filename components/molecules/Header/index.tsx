"use client";

import {
  HEADER_DASHBOARD_HEIGHT,
  SIDEBAR_WIDTH,
} from "@/constants/appVariables";
import useGlobalStateStore from "@/stores/useGlobalStateStore";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { IconMenuDeep, IconUser } from "@tabler/icons-react";
import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const { setOpenSidebarNavigation } = useGlobalStateStore();
  const handleOpenSidebar = () => {
    setOpenSidebarNavigation(true);
  };
  return (
    <Box
      component="header"
      className="fixed flex items-center justify-between py-6 pl-4 pr-6 md:p-6"
      sx={{
        height: `${HEADER_DASHBOARD_HEIGHT}px`,
        width: { xs: "100%", md: `calc(100% - ${SIDEBAR_WIDTH}px)` },
      }}
    >
      <Box className="flex items-center gap-3">
        <IconButton
          className="block h-10 md:hidden"
          color="primary"
          onClick={handleOpenSidebar}
        >
          <IconMenuDeep />
        </IconButton>
        <Box className="flex flex-col">
          <Typography
            variant="caption"
            className="hidden md:block"
            color="primary.main"
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            fontWeight={700}
            className="text-lg md:text-2xl"
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box className="flex items-center gap-3">
        <Box className="items-center hidden gap-1 md:flex">
          <Typography>Hi,</Typography>
          <Typography>User</Typography>
        </Box>
        <Avatar sx={{ width: 30, height: 30 }}>
          <IconUser size={20} />
        </Avatar>
      </Box>
    </Box>
  );
};

export default Header;
