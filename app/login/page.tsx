'use client'

import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import GodExamLogo from '@/assets/images/godexam-logo.svg'


const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

    return (
        <Box className="w-full min-h-screen flex items-center justify-center">
      <Paper
        // elevation={3}
        className="rounded-lg shadow-md p-6"
      >
        <Box>
          <Image src={GodExamLogo} alt="Exam Logo" /> 
        </Box>
        <Box sx={{ marginTop: '20px', marginBottom: '10px' }}>
          <Typography sx={{ textAlign: 'center' }} variant="body1">
            Selamat datang di GodExam 
          </Typography>
          <Typography sx={{ textAlign: 'center' }} variant="body1">
            Ujian berbasis online
          </Typography>
        </Box>
        <Box
          component="form"
          noValidate={false}
          sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          }}
          onSubmit={(e) => {e.preventDefault()}}
          // onSubmit={(e) => handleLoginSubmit(e)}
        >
          <TextField
            required
            id="inputUsername"
            label="Username"
            value={username}
            margin="normal"
            size="small"
            sx={{ maxWidth: '300px' }}
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
            sx={{ maxWidth: '300px' }}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ marginTop: '10px' }}
          >Masuk</Button>
        </Box>
      </Paper>
    </Box>
    )
}

export default LoginPage