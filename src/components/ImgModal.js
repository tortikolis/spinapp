import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxWidth: '90%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  ['@media (max-width:780px)']: {
    maxWidth:'100%',
  },
};

const ImgModal = ({handleClose, open, imgSrc}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <img style={{maxWidth:'400px'}} src={imgSrc}/>
        </Box>
      </Modal>
    </div>
  );
}

export default ImgModal;