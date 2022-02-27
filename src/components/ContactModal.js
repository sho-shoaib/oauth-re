import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGlobalContext } from "../context";
import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  pr: { xs: 4, lg: 8 },
};

const ContactModal = () => {
  const { open, setOpen, handleOpen, handleClose } = useGlobalContext();

  return (
    <div>
      <Modal
        keepMounted
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                id='transition-modal-title'
                variant='h6'
                component='h2'
                sx={{ mb: 2 }}
              >
                Contact us
              </Typography>
              <IconButton
                sx={{ color: "black", transform: "translateY(-15px)" }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <Box
                id='email-box'
                sx={{
                  borderRight: 1,
                  borderColor: { xs: "rgba(0,0,0,0)", lg: "rgba(0,0,0,0.5)" },
                  pr: { xs: 0, lg: 2 },
                  mr: 2,
                }}
              >
                <form>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 2,
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <TextField variant='outlined' label='name' />
                    <TextField
                      variant='outlined'
                      label='email'
                      sx={{ width: 250 }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      variant='outlined'
                      label='subject'
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      variant='outlined'
                      label='message'
                      multiline
                      rows={2}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Box>
                  <Button
                    variant='contained'
                    color='success'
                    endIcon={<SendIcon />}
                    sx={{ mb: { xs: 2, lg: 0 } }}
                  >
                    Send
                  </Button>
                </form>
              </Box>
              <Box id='phone-box'>
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'
                  sx={{ mb: 2 }}
                >
                  Or call us at
                </Typography>
                <Typography>+91 999 999 9999</Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ContactModal;
