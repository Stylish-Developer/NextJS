import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import GrassIcon from "@mui/icons-material/Grass";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { Link } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const pages = ["Home", "About", "Technologies", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { data: session, status } = useSession();

  // console.log(`useSession hook has${JSON.stringify(session)}`);

  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GrassIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            onClick={() => router.push("/")}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GAUTHAM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              {pages.map((page) => {
                let dynamicHrefT = "";
                if (page === "Home") {
                  dynamicHrefT = "/";
                } else if (page === "About") {
                  dynamicHrefT = "/about";
                } else if (page === "Technologies") {
                  dynamicHrefT = "/technologies";
                } else if (page === "Contact") {
                  dynamicHrefT = "/contact";
                }

                return (
                  <Link
                    href={dynamicHrefT}
                    key={page}
                    sx={{ textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </Box>
          <GrassIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GAUTHAM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              let dynamicHrefN = "";

              if (page === "Home") {
                dynamicHrefN = "/";
              } else if (page === "About") {
                dynamicHrefN = "/about";
              } else if (page === "Technologies") {
                dynamicHrefN = "/technologies";
              } else if (page === "Contact") {
                dynamicHrefN = "/contact";
              }

              return (
                <Link
                  href={dynamicHrefN}
                  key={page}
                  sx={{ textDecoration: "none" }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0, marginRight: 5, display: "flex" }}>
            <Link href={"/dashboard"} sx={{ textDecoration: "none" }}>
              <Button
                onClick={() => {}}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                dashboard
              </Button>
            </Link>
            {!session && (
              <Link href={"/api/auth/signin"} sx={{ textDecoration: "none" }}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    signIn(); // we can specify the same as an argument to the signIn signIn('github') it helps to us without having to land on the signin page
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  signin
                </Button>
              </Link>
            )}

            {session && (
              <Link href={"/api/auth/signout"} sx={{ textDecoration: "none" }}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  signout
                </Button>
              </Link>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="user">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="G" src="/public/profile.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
                let dynamicHrefP = "";
                if (setting === "Profile") {
                  dynamicHrefP = "/profile";
                } else if (setting === "Account") {
                  dynamicHrefP = "/account";
                } else if (setting === "Dashboard") {
                  dynamicHrefP = "/dashboard";
                } else if (setting === "Logout") {
                  dynamicHrefP = "/api/auth/signout";
                }
                return (
                  <Link
                    href={dynamicHrefP}
                    key={setting}
                    sx={{ textDecoration: "none" }}
                  >
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
