import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    holder: {
        height: '12vw',
        width: '12vw',
        minHeight: '80px',
        minWidth: '80px',
        margin: 'auto',
        position: 'relative',
    },

    imgStyle: {
        outline: '0.15vw black solid',
        borderRadius: '0.3vw',
        height: '12vw',
        weight: '12vw',
        minHeight: '80px',
        minWeight: '80px',
        objectFit: 'cover',
        boxShadow: '0.2vw 0.3vw 0.5vw 0.2vw #dadadc',
    },

    editImgBtn: {
        position: 'absolute',
        width: '100%',
        height: '2.5vw',
        minHeight: '20px',
        minWidth: '80px',
        backgroundColor: 'rgb(218, 218, 220, 0.7)',
        bottom: '0',
        left: '0',
        borderRadius: '0 0 0.3vw 0.3vw',
        border: '0px',
        fontWeight: 'bolder',
    },

    inModalImg: {
        outline: '0.15vw #9b9b9b solid',
        borderRadius: '0.3vw',
        height: '12vw',
        weight: '12vw',
        minHeight: '80px',
        minWeight: '80px',
        objectFit: 'cover',
        boxShadow: '0.2vw 0.3vw 0.5vw 0.2vw #dadadc',
    }

}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function EditImageModal({image}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box align='center' className={classes.holder}>
        <img src={image}
             className={classes.imgStyle} />
        <button className={classes.editImgBtn} onClick={handleOpen}>
            Tap to Edit Image
        </button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" 
                      fontSize='220%' 
                      align='center'
                      fontWeight='bolder'>
            Edit Product Image
          </Typography>
          <Box height='2vw' minHeight='16px' />
          <Box className={classes.holder}>
            <img src={image}
                 className={classes.imgStyle}
                 style={{outline:'0.15vw #9b9b9b solid'}} />
          </Box>

          <Typography id="modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
