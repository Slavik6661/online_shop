import { Box } from "@mui/material";
interface BackLinkCardProps {
  isMobile: boolean;
  text?: string;
  link: string;
}
const BackLinkCard: React.FC<BackLinkCardProps> = ({
  isMobile,
  text,
  link,
}) => {
  const icon = "/other/arrowLeft.svg";
  return (
    <>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "x-large",
            gap: "10px",
            paddingBottom: "25px",
          }}
        >
          <Box
            onClick={() => console.log("click")}
            sx={{
              width: "12px",
              height: "50px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "rgba(222, 222, 222, 0.5)",
                borderRadius: "100%",
              },
            }}
          >
            <Box
              component={"a"}
              href={link}
              sx={{
                width: "12px",
                height: "17px",
                backgroundImage: `url(${icon})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
          {text || "Смартфоны"}
        </Box>
      ) : (
        <Box
          sx={{ display: "flex", alignItems: "center", fontSize: "xx-large" }}
        >
          <Box
            onClick={() => console.log("click")}
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "rgba(222, 222, 222, 0.5)",
                borderRadius: "100%",
              },
            }}
          >
            <Box
              component={"a"}
              href={link}
              sx={{
                width: "40px",
                height: "40px",
                backgroundImage: `url(${icon})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
          {text || "Смартфоны"}
        </Box>
      )}
    </>
  );
};
export default BackLinkCard;
