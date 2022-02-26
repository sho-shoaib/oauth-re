import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import hdfc from "../svg/hdfc.svg";
import icici from "../svg/icici.svg";
import sbi from "../svg/sbi.svg";

const HomeCompanies = () => {
  return (
    <Box sx={{ backgroundColor: "rgb(192,192,192, 0.25)" }}>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant='h6'
          sx={{ color: "rgba(0,0,0,0.5)", transform: "translateY(50px)" }}
        >
          We trade in all listed and preipo stocks
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component='img'
            sx={{ height: 150, width: 150 }}
            src={hdfc}
            alt='hdfc'
          />
          <Box
            component='img'
            sx={{ height: 200, width: 200, marginInline: { xs: 0, sm: 3 } }}
            src={icici}
            alt='icici'
          />
          <Box
            component='img'
            sx={{ height: 50, width: 100 }}
            src={sbi}
            alt='sbi'
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeCompanies;
