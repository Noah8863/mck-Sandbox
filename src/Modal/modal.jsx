import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./modal.css"

function BasicModal({ open, onClose, headerText, children, handleCloseModal, buttonText }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalStyle">
          <Typography id="modal-modal-title" variant="h6" component="h2" className="headerStyle">
            {headerText}
          </Typography>

          <Box component="div" sx={{ p: 2 }}>
            {children}
          </Box>

          <Box className="footerStyle">
            <Button variant="text" color="primary" onClick={handleCloseModal}>Cancel</Button>
            <Button variant="contained" color="primary">
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;