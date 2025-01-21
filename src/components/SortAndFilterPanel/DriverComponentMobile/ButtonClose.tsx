import { Box } from "@mui/joy";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { closeModal } from "../../../redux/slices/uiSlice";

interface CloseButtonProps {
  text: string;
}
const icon = "/other/arrowLeft.svg";
const CloseButton: React.FC<CloseButtonProps> = ({ text }) => {
  const dispatch = useAppDispatch();
  return (
    <Box
      onClick={() => dispatch(closeModal("filterModal"))}
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
          sx={{
            width: "12px",
            height: "17px",
            backgroundImage: `url(${icon})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Box>
      {text}
    </Box>
  );
};

export default CloseButton;
