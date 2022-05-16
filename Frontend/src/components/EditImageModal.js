import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles, Grid } from '@material-ui/core';
import { useState } from 'react';
import { Input } from "@mui/material";

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
    width: '12vw',
    minHeight: '80px',
    minWidth: '80px',
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
    height: '15vw',
    width: '15vw',
    minHeight: '120px',
    minWidth: '120px',
    objectFit: 'cover',
    boxShadow: '0.2vw 0.3vw 0.5vw 0.2vw #dadadc',
  }

}))

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  minWidth: '350px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function EditImageModal({ image }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [productImage, setProductImage] = useState("");
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

          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={image}
              className={classes.inModalImg}
              style={{ outline: '0.15vw #9b9b9b solid' }} />
          </Box>
          <Box height='2vw' minHeight='16px' />

          <Box style={{ padding: '3vw' }}>
            <Input
              fullWidth
              onChange={(e) => setProductImage(e.target.files[0], "productImage")}
              required
              type="file"
              style={{ fontSize: '160%' }}
            />
          </Box>

          <Grid item xs={12}
            style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center', padding:'1vw 3vw' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                fontSize: '130%', backgroundColor: '#01027B', color: 'white',
                '&:hover': {
                  backgroundColor: "#000193", color: "white"
                }
              }}
            >
              Update Image
            </Button>
            <Button
              fullWidth
              onClick={handleClose}
              variant="contained"
              sx={{
                fontSize: '130%',
                backgroundColor: '#bbbbbb',
                color: 'black',
                '&:hover': { backgroundColor: '#9b9b9b' }
              }}
            >
              Cancel
            </Button>

          </Grid>

        </Box>
      </Modal>
    </>
  );
}
