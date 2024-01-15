"use client";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { FormEvent, useState } from "react";
import GodExamLogo from "@/assets/images/godexam-logo.svg";
import { DUMMY_USER_DATA } from "@/constants/user";
import useAuth from "@/hooks/useAuth";
import useGlobalStateStore from "@/stores/useGlobalStateStore";

const LoginPage = () => {
  const { login } = useAuth();
  const { setOpenAlert } = useGlobalStateStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      username === DUMMY_USER_DATA.username &&
      password === DUMMY_USER_DATA.password
    ) {
      login({
        isLoggedIn: true,
        user: {
          name: DUMMY_USER_DATA.name,
          username: DUMMY_USER_DATA.username,
        },
      });
    } else {
      setOpenAlert({
        isOpen: true,
        message: "User not found, check again username and password!",
        severity: "error",
      });
    }
  };

  return (
    <Box className="w-full min-h-screen flex items-center justify-center">
      <Paper
        // elevation={3}
        className="rounded-lg shadow-md p-6 min-w-[290px] min-h-[350px]"
      >
        <Box
          component="div"
          className="w-full flex justify-center items-center"
        >
          <Image src={GodExamLogo} alt="Exam Logo" width={100} />
        </Box>
        <Box sx={{ marginTop: "20px", marginBottom: "10px" }}>
          <Typography sx={{ textAlign: "center" }} variant="body1">
            Welcome to GodExam
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="body1">
            Online based exam
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="inputUsername"
            label="Username"
            value={username}
            margin="normal"
            size="small"
            sx={{ maxWidth: "300px" }}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            id="inputPassword"
            label="Password"
            value={password}
            type="password"
            margin="normal"
            size="small"
            sx={{ maxWidth: "300px" }}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ marginTop: "10px" }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
