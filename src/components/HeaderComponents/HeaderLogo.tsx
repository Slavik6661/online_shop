import { FC } from "react";
import { Box, Typography } from "@mui/material";
interface HeaderLogoProps {
  logo: string;
}

const HeaderLogo: FC<HeaderLogoProps> = ({ logo }) => {
  return (
    <Typography variant="h6" component="div">
      <Box
        component="a"
        href="/"
        sx={{
          display: "inline-block",
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "150px",
          height: "25px",
        }}
      />
    </Typography>
  );
};

export default HeaderLogo;
