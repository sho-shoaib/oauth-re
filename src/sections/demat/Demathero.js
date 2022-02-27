import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import background from "../../images/dematback.jpg";

const Demathero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        height: "98vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <Container
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 30, md: 40 },
              color: "white",
              textAlign: "center",
            }}
          >
            Let's start the journey with our <span id='hero-span'>IDEA</span>{" "}
            your <span id='hero-span'>PENNY</span> and earn more{" "}
            <span id='hero-span'>MONEY</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Demathero;
