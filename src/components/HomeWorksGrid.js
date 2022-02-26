import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HomeWorksGridPer from "./HomeWorksGridPer";
import React from "react";

const HomeWorksGrid = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            p: 5,
            border: 10,
            display: { xs: "none", md: "grid" },
            pt: 10,
            pb: 10,
            borderRadius: 5,
            transform: "translateY(-100px)",
            mb: 10,
            minWidth: 250,
            placeItems: "center",
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontWeight: 500,
              fontSize: { xs: 30, md: 35 },
              fontWeight: 400,
              color: "rgba(245, 230, 83, 0.9)",
            }}
          >
            Unlisted
          </Typography>
        </Box>
        <Box
          sx={{
            transform: "translateY(60px)",
            display: { xs: "none", md: "flex" },
          }}
        >
          <HomeWorksGridPer trans='0' mr='-40px'>
            Commodities
          </HomeWorksGridPer>
          <HomeWorksGridPer trans='80' mr='-40px'>
            Derivative
          </HomeWorksGridPer>
          <HomeWorksGridPer trans='150'>Equity</HomeWorksGridPer>
          <HomeWorksGridPer trans='80' ml='-40px'>
            Currency
          </HomeWorksGridPer>
          <HomeWorksGridPer trans='0' ml='-40px'>
            Mutual fund
          </HomeWorksGridPer>
        </Box>
        <Grid container spacing={2} sx={{ width: "100%", mt: 4.5, mb: 10 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                pt: 5,
                pb: 5,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "rgba(245, 230, 83, 0.9)",
                }}
              >
                Unlisted
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                pt: 8,
                pb: 8,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "rgba(245, 230, 83, 0.9)",
                }}
              >
                Unlisted
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                pt: 8,
                pb: 8,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "rgba(245, 230, 83, 0.9)",
                }}
              >
                Unlisted
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                pt: 8,
                pb: 8,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "rgba(245, 230, 83, 0.9)",
                }}
              >
                Unlisted
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                pt: 8,
                pb: 8,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "rgba(245, 230, 83, 0.9)",
                }}
              >
                Unlisted
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                pt: 5,
                pb: 5,
                border: 10,
                borderRadius: 5,
                textAlign: "center",
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: 30, md: 35 },
                  fontWeight: 400,
                  color: "rgba(245, 230, 83, 0.9)",
                }}
              >
                Unlisted
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeWorksGrid;
