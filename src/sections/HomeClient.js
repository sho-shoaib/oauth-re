import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import user4 from "../images/user4.jpg";
import user5 from "../images/user5.jpg";

const grid1 = [
  {
    img: user1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus incidunt minima maxime, fuga autem nihil dignissimos nulla sunt perferendis quaerat eaque rerum aperiam sint est maiores. Rem, quidem ex.",
  },
  {
    img: user2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus incidunt minima maxime, fuga autem nihil dignissimos nulla sunt perferendis quaerat eaque rerum aperiam sint est maiores. Rem, quidem ex.",
  },
  {
    img: user3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus incidunt minima maxime, fuga autem nihil dignissimos nulla sunt perferendis quaerat eaque rerum aperiam sint est maiores. Rem, quidem ex.",
  },
  {
    img: user4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus incidunt minima maxime, fuga autem nihil dignissimos nulla sunt perferendis quaerat eaque rerum aperiam sint est maiores. Rem, quidem ex.",
  },
  {
    img: user5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus incidunt minima maxime, fuga autem nihil dignissimos nulla sunt perferendis quaerat eaque rerum aperiam sint est maiores. Rem, quidem ex.",
  },
];

const HomeClient = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Container sx={{ pt: 3, pb: 5 }}>
        <Header>Client testimonials</Header>
        <Grid
          container
          spacing={5}
          rowSpacing={13}
          sx={{
            mt: 3,
            justifyContent: "center",
            paddingInline: { xs: 5, sm: 1, md: 10 },
          }}
        >
          {grid1.map(({ img, text }, i) => {
            return (
              <Grid item xs={12} sm={6} lg={4}>
                <Box
                  key={i}
                  sx={{
                    backgroundColor: "rgba(111, 70, 134, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingInline: 1,
                    borderRadius: 2,
                  }}
                >
                  <Box
                    component='img'
                    src={img}
                    alt='name'
                    sx={{
                      height: 200,
                      width: 200,
                      borderRadius: "50%",
                      overflow: "hidden",
                      backgroundColor: "white",
                      p: 1,
                      objectFit: "cover",
                      zIndex: 1,
                      transform: "translateY(-80px)",
                      border: 0.5,
                      borderColor: "rgba(111, 70, 134, 0.2)",
                    }}
                  />
                  <Typography
                    sx={{ textAlign: "center", transform: "translateY(-50px)" }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeClient;
