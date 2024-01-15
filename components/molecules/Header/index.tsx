"use client";

import {
  HEADER_DASHBOARD_HEIGHT,
  SIDEBAR_WIDTH,
} from "@/constants/appVariables";
import useAuth from "@/hooks/useAuth";
import useGlobalStateStore from "@/stores/useGlobalStateStore";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { IconLogout, IconMenuDeep, IconUser } from "@tabler/icons-react";
import React, { useState } from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const { setOpenSidebarNavigation } = useGlobalStateStore();
  const { logout, getUserData } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openAccountMenu = Boolean(anchorEl);
  const handleOpenAccountMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAccountMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenSidebar = () => {
    setOpenSidebarNavigation(true);
  };

  const handleLogout = () => {
    logout();
    handleCloseAccountMenu();
  };
  return (
    <Box
      component="header"
      className="fixed flex items-center justify-between py-6 pl-4 pr-6 md:p-6 bg-background-default"
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
          <Typography>{getUserData?.user.name}</Typography>
        </Box>
        <IconButton onClick={handleOpenAccountMenu}>
          <Avatar sx={{ width: 30, height: 30 }}>
            <IconUser size={20} />
          </Avatar>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openAccountMenu}
          onClose={handleCloseAccountMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>
            <IconLogout />
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
