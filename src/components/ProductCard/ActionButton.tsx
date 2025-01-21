import { FC } from "react";
import { Button } from "@mui/material";
import theme from "../../theme";

interface ActionButtonProps {
  inBasket: () => boolean;
  onAdd: () => void;
  onRemove: () => void;
  disabled: boolean;
}
const ActionButton: FC<ActionButtonProps> = ({
  inBasket,
  onAdd,
  onRemove,
  disabled,
}) => {
  return (
    <>
      {inBasket() ? (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => onRemove()}
          sx={{ marginTop: theme.spacing(2), borderRadius: "20px" }}
        >
          Удалить из корзины
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onAdd}
          sx={{ marginTop: theme.spacing(2), borderRadius: "20px" }}
          disabled={disabled}
        >
          В корзину
        </Button>
      )}
    </>
  );
};

export default ActionButton;
