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

export default function EditImageModal({ image, changeImage }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [productImage, setProductImage] = useState("");
  const [sendImage, setSendImage] = useState("");
  const handleOpen = () => setOpen(true);
  function handleClose() {
    setIsUploaded(false)
    setProductImage("")
    setOpen(false)
  };
  const [isUploaded, setIsUploaded] = useState(false);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setIsUploaded(true);
        setProductImage(e.target.result);
        console.log("Preview Result: ", e.target.result)
      };
      console.log("read as 0: ", e.target)
      reader.readAsDataURL(e.target.files[0]);
      console.log("BLOB: ", e.target.files[0])
    }
  }

  function handleImage(e) {
    handleImageChange(e)
    setSendImage(e.target.files[0])
    console.log("sending image: ", e.target.files[0])
  }

  function updateImage() {
    { changeImage(sendImage) };
    setOpen(false)
  }

  const resetImage = (e) => {
    setProductImage("");
    setIsUploaded(false);
  }

  return (
    <>
      <Box align='center' className={classes.holder}>
        {isUploaded == false ? (
          <img src={image}
            className={classes.imgStyle} />
        ) : (
          <img src={productImage}
            className={classes.imgStyle} />
        )}
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

          <Box style={{ display: 'flex', justifyContent: 'center' }} id='modal'>
            {isUploaded == false ? (
              <img src={image}
                className={classes.inModalImg}
                style={{ outline: '0.15vw #9b9b9b solid' }} />
            ) : (
              <img src={productImage}
                className={classes.inModalImg}
                style={{ outline: '0.15vw #9b9b9b solid' }} />
            )
            }
          </Box>
          <Box height='2vw' minHeight='16px' />

          <Grid item xs={12}
            style={{
              marginBottom: "2em", display: 'flex',
              gap: '1em', alignItems: 'center', padding: '3vw'
            }}>
            <Input
              fullWidth
              onChange={handleImage}
              required
              type="file"
              accept="image/*"
              style={{ fontSize: '160%' }}
            />

            <Button
              onClick={resetImage}
              variant="contained"
              sx={{
                fontSize: '120%', backgroundColor: 'red', color: 'white',
                '&:hover': {
                  backgroundColor: "#d0021b", color: "white"
                }
              }}
            >reset</Button>
          </Grid>

          <Grid item xs={12}
            style={{ marginBottom: "1em", display: 'flex', gap: '1em', alignItems: 'center', padding: '1vw 3vw' }}>
            <Button
              onClick={updateImage}
              fullWidth
              variant="contained"
              sx={{
                fontSize: '130%', backgroundColor: '#01027B', color: 'white',
                '&:hover': {
                  backgroundColor: "#000193", color: "white"
                }
              }}
            >
              Confirm Image
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
