import { useEffect, useState } from "react";
import { closeModal, openModal } from "../../../redux/slices/uiSlice";
import { Modal, ModalClose, ModalDialog, Radio, RadioGroup } from "@mui/joy";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { UiState } from "../../../redux/slices/uiSlice";
const fadeIn = {
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "slice(0.9)",
    },
    to: { opacity: 1, transform: "slice(1)" },
  },
};

const fadeOut = {
  "@keyframes fadeOut": {
    from: {
      opacity: 1,
      transform: "slice(1)",
    },
    to: { opacity: 0, transform: "slice(0.9)" },
  },
};

const sortData = [
  "Сначала популярные",
  "Сначала недорогие",
  "Сначала дорогие",
  "По скидке(%)",
  "По количеству отзывов",
  "Сначала с лучшей оценкой",
];

interface ModalSortProps {
  setSelectedSortItem: (value: number) => void;
}
const ModalSort: React.FC<ModalSortProps> = ({ setSelectedSortItem }) => {
  useEffect(() => setData(sortData), []);
  const dispatch = useAppDispatch();
  const isSortModalOpen = useAppSelector(
    (state: { ui: UiState }) => state.ui.modals["sortModal"]
  );
  const [animation, setAnimation] = useState(false);
  const [Data, setData] = useState<string[]>([]);

  const handleAnimationClose = () => {
    setAnimation(false);
    setTimeout(() => dispatch(closeModal("sortModal")), 200);
  };
  return (
    <Modal open={isSortModalOpen} onClose={handleAnimationClose}>
      <ModalDialog
        variant="outlined"
        sx={{
          animation: animation
            ? `${fadeIn["@keyframes fadeIn"]} 300ms ease-in out`
            : `${fadeOut["@keyframes fadeOut"]} 300ms ease-in out`,
        }}
      >
        <ModalClose />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={sortData[0]}
          name="radio-buttons-group"
          sx={{ gap: "10px" }}
          onChange={(event) => {
            setSelectedSortItem(sortData.indexOf(event.target.value));
            handleAnimationClose();
          }}
        >
          {Data.map((item, index) => (
            <Radio
              key={index}
              value={item}
              label={item}
              sx={{ width: "90%" }}
            />
          ))}
        </RadioGroup>
      </ModalDialog>
    </Modal>
  );
};
export default ModalSort;
