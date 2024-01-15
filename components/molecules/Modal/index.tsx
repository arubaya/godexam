import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";

export interface ModalProps {
  open: boolean;
  children: React.ReactElement;
  onClose: () => void;
  title: string;
}

const Modal = ({ onClose, children, open, title }: ModalProps) => {
  return (
    <Dialog onClose={onClose} open={open} fullWidth>
      <DialogTitle className="text-lg">{title}</DialogTitle>
      <Box className="w-full flex justify-center px-6">
        <Box className="h-[1px] w-full bg-neutral-200" />
      </Box>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
