import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
          {/* {text} */}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            alignItems: "center",
            fontSize: "x-large",
            paddingBottom: "20px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate(link)}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Box
              component={"a"}
              href={link}
              sx={{
                width: "18px",
                height: "18px",
                backgroundImage: `url(${icon})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
          {text}
        </Box>
      )}
    </>
  );
};
export default BackLinkCard;
