import { Phone } from "@mui/icons-material";
import { Fab } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";
import { useGlobalContext } from "../context";

const ContactBtn = () => {
  const { handleOpen } = useGlobalContext();

  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: 70,
        right: { xs: 50, md: 60, lg: 100 },
        backgroundColor: "rgba(255, 240, 0, 1)",
        "&:hover": {
          backgroundColor: "rgba(255, 240, 0, 0.9)",
        },
      }}
      onClick={handleOpen}
    >
      <LocalPhoneIcon />
    </Fab>
  );
};

export default ContactBtn;
