import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeaderIconMenu from "./HeaderIconMenu";
import {
  basketIcon,
  orderIcon,
  favoriteIcon,
  glanceIcon,
  profileIcon,
} from "../../assets/header";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectBasketItems } from "../../redux/slices/basketSlice";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const baskeState = useAppSelector(selectBasketItems);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="static"
        sx={{
          minHeight: "80px",
          bgcolor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #dbc8c8",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          {!isMobile ? (
            <>
              <Typography variant="h6" component="div" sx={{}}>
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    backgroundImage: `url(${glanceIcon})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "150px",
                    height: "25px",
                  }}
                />
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "70%",
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Search..."
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: theme.palette.grey[300],
                      },
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "40px",
                  paddingLeft: 2,
                  justifyContent: "space-evenly",
                }}
              >
                <Badge color="secondary" badgeContent={1} max={100}>
                  <HeaderIconMenu
                    iconSrc={favoriteIcon}
                    onClick={() => console.log("basketIcon")}
                  />
                </Badge>

                <Badge
                  color="secondary"
                  badgeContent={baskeState.length}
                  max={100}
                >
                  <HeaderIconMenu
                    iconSrc={basketIcon}
                    onClick={() => navigate("/basket")}
                  />
                </Badge>

                <HeaderIconMenu
                  iconSrc={orderIcon}
                  onClick={() => console.log("order")}
                />

                <HeaderIconMenu
                  iconSrc={profileIcon}
                  onClick={() => console.log("profileIcon")}
                />
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                  padding: 2,
                }}
              >
                <Typography variant="h6" component="div" sx={{}}>
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      backgroundImage: `url(${glanceIcon})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "150px",
                      height: "25px",
                    }}
                  />
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                    sx={{
                      flexGrow: 1,
                      bgcolor: "white",
                      borderRadius: 1,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: theme.palette.grey[300],
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
              <BottomNavigation
                showLabels
                sx={{
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  justifyContent: "space-around",
                  alignItems: "center",
                  bgcolor: theme.palette.background.paper,
                  boxShadow: theme.shadows[4],
                  zIndex: theme.zIndex.appBar + 1,
                }}
              >
                <HeaderIconMenu
                  iconSrc={basketIcon}
                  onClick={() => console.log("catalog")}
                />

                <HeaderIconMenu
                  iconSrc={favoriteIcon}
                  onClick={() => console.log("basketIcon")}
                />

                <HeaderIconMenu
                  iconSrc={orderIcon}
                  onClick={() => console.log("basketIcon")}
                />

                <HeaderIconMenu
                  iconSrc={profileIcon}
                  onClick={() => console.log("profileIcon")}
                />
              </BottomNavigation>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
