import { SIDEBAR_WIDTH } from "@/constants/appVariables"
import { Box, Paper } from "@mui/material"
import Image from "next/image"

import ExamLogo from '@/assets/images/godexam-logo.svg'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box component='main' className="w-full min-h-screen flex">
      <Box className="fixed min-h-screen p-3 flex" sx={{
        width:SIDEBAR_WIDTH
      }}>
        <Paper elevation={0} className="shadow-md w-full p-3 rounded-lg flex self-stretch">
          <Box className='w-full p-2 flex items-center justify-center self-start'>
            <Image src={ExamLogo} width={100} alt="exam logo" />
          </Box>
        </Paper>
      </Box>
      <Box className="flex min-h-screen" sx={{
        marginLeft: `${SIDEBAR_WIDTH}px`,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`
      }}>
        {children}
      </Box>
    </Box>
  )
}
