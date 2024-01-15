import { HEADER_HEIGHT } from "@/constants/appVariables";
import useExamStore from "@/stores/useExamStore";
import { Box, Button } from "@mui/material";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { useState } from "react";
import Modal from "@/components/molecules/Modal";
import ReviewAnswer from "@/components/molecules/ReviewAnswer";

const FooterExam = () => {
  const { pagination, setCurrentQuestionId } = useExamStore();
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const handlePagination = (id: string) => {
    if (pagination.isLastQuestion && id === "") {
      setOpenReviewModal(true);
    } else {
      setCurrentQuestionId(id);
    }
  };

  const handleOnSubmit = () => {
    setOpenReviewModal(false);
  };
  return (
    <Box
      component="footer"
      className="fixed bottom-0 flex items-center justify-between w-full p-3 bg-background-default"
      sx={{ height: HEADER_HEIGHT }}
    >
      <Button
        color="secondary"
        disabled={pagination.beforeQuestionId === ""}
        onClick={() => handlePagination(pagination.beforeQuestionId)}
      >
        <IconChevronLeft size={18} />
        Back
      </Button>
      <Button
        color={pagination.isLastQuestion ? "primary" : "secondary"}
        onClick={() => handlePagination(pagination.nextQuestionId)}
      >
        {pagination.isLastQuestion ? "Finish" : "Next"}
        <IconChevronRight size={18} />
      </Button>
      {openReviewModal && (
        <Modal
          open={openReviewModal}
          onClose={() => setOpenReviewModal(false)}
          title="Review your answer!"
        >
          <ReviewAnswer onSubmit={handleOnSubmit} />
        </Modal>
      )}
    </Box>
  );
};

export default FooterExam;
