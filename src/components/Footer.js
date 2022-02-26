import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ backgroundColor: "#171717", color: "white" }}>
        <Container>
          <Box sx={{ pt: 8, pb: 8 }}>
            <Box>
              <Typography variant='h4' sx={{ fontWeight: 600, mb: 1 }}>
                Logo
              </Typography>
              <Typography variant='body1' sx={{ color: "rgb(212 212 212)" }}>
                Your solution to stocks
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
