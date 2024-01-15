import { HEADER_HEIGHT } from "@/constants/appVariables";
import { Box, Button } from "@mui/material";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React from "react";

const FooterExam = () => {
  return (
    <Box
      component="footer"
      className="fixed bottom-0 flex items-center justify-between w-full p-3 bg-background-default"
      sx={{ height: HEADER_HEIGHT }}
    >
      <Button color="secondary">
        <IconChevronLeft size={18} />
        Back
      </Button>
      <Button color="secondary">
        Next
        <IconChevronRight size={18} />
      </Button>
    </Box>
  );
};

export default FooterExam;
