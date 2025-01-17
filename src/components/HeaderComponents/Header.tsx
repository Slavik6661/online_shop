import React from "react";
import { useMediaQuery, useTheme, Box, Toolbar, AppBar } from "@mui/material";
import { glanceIcon } from "../../assets/header";
import HeaderIcons from "./HeadersIcons";
import SearchField from "./SearchField";
import HeaderLogo from "./HeaderLogo";
import MobileBottomNav from "./MobileBottomNav";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="static"
        sx={{
          borderRadius: "5px",
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
          {!isMobile ? (
            <>
              <HeaderLogo logo={glanceIcon} />
              <Box
                sx={{
                  display: "flex",
                  width: "70%",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <SearchField />
              </Box>
              <HeaderIcons />;
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
                <HeaderLogo logo={glanceIcon} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <SearchField />
                </Box>
              </Box>
              <MobileBottomNav />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
