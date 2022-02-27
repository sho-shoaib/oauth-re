import {
  AppBar,
  Box,
  Button,
  Container,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";

const pages = ["Home", "Contact us", "Demat acc", "About us"];

const Navbar = () => {
  const navigate = useNavigate();
  const { handleOpen } = useGlobalContext();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <AppBar sx={{ width: "100vw" }}>
        <Toolbar
          sx={{
            width: "100vw",
            position: "fixed",
            top: 0,
            backgroundColor: `${trigger ? "#f5f5f5" : "transparent"}`,
            transition: "0.4s",
            zIndex: "1000",
            boxShadow: trigger ? 4 : 0,
          }}
        >
          <Container
            maxWidth='xl'
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontSize: 30,
                color: `${trigger ? "black" : "white"}`,
                transition: "0.1s",
                cursor: "pointer",
              }}
              onClick={() => navigate("/oauth-re/")}
            >
              Logo
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                  gap: 15,
                },
              }}
            >
              <Button
                variant='text'
                sx={{
                  color: `${trigger ? "black" : "white"}`,
                  transition: "0.1s",
                }}
                onClick={() => navigate("/oauth-re/")}
              >
                Home
              </Button>
              <Button
                variant='text'
                sx={{
                  color: `${trigger ? "black" : "white"}`,
                  transition: "0.1s",
                }}
                onClick={handleOpen}
              >
                Contact us
              </Button>
              <Button
                variant='text'
                sx={{
                  color: `${trigger ? "black" : "white"}`,
                  transition: "0.1s",
                }}
                onClick={() => navigate("/oauth-re/demat")}
              >
                Demat acc
              </Button>
              <Button
                variant='text'
                sx={{
                  color: `${trigger ? "black" : "white"}`,
                  transition: "0.1s",
                }}
                onClick={() => navigate("/oauth-re/")}
              >
                About us
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, color: "white" }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                sx={{ color: trigger ? "black" : "white" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      if (page === "Contact us") {
                        handleOpen();
                      }
                      if (page === "Demat acc") {
                        navigate("/oauth-re/demat");
                      }
                      if (page === "Home") {
                        navigate("/oauth-re/");
                      }
                    }}
                  >
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <ContactModal />
    </>
  );
};

export default Navbar;
