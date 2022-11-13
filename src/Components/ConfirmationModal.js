import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  px: 10,
};
const ConfirmationModal = ({ openStatus }) => {
  const [open, setOpen] = React.useState(openStatus);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">Remove address</h2>
          <p id="child-modal-description">Are you sure to delete?</p>
          <Button variant="contained" color="error" sx={{ mb: 1 }}>
            Yes
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{ mb: 1, mx: 5 }}
          >
            Close{" "}
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
