import { useEffect, useState } from "react";
import { closeModal, openModal } from "../../../redux/slices/uiSlice";
import { Modal, ModalClose, ModalDialog, Radio, RadioGroup } from "@mui/joy";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { UiState } from "../../../redux/slices/uiSlice";
import useSortItems from "../../../hooksComponents/useSortItems";

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

interface ModalSortProps {
  setSelectedSortItem: (value: number) => void;
}

const ModalSort = () => {
  const dispatch = useAppDispatch();
  const { sortedItemsList, handleChange, selectSortItem, isLoading } =
    useSortItems();

  const isSortModalOpen = useAppSelector(
    (state: { ui: UiState }) => state.ui.modals["sortModal"]
  );

  const [animation, setAnimation] = useState(false);
  const [sortedItems, setSortedItems] = useState(sortedItemsList);

  const handleAnimationClose = () => {
    setAnimation(false);
    setTimeout(() => dispatch(closeModal("sortModal")), 300);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
          defaultValue={sortedItems[selectSortItem].value}
          name="radio-buttons-group"
          sx={{ gap: "10px" }}
          onChange={() => handleAnimationClose()}
        >
          {sortedItems.map((item) => (
            <Radio
              onChange={() => handleChange(item.id)}
              key={item.id}
              value={item.value}
              label={item.value}
              sx={{ width: "90%" }}
            />
          ))}
        </RadioGroup>
      </ModalDialog>
    </Modal>
  );
};
export default ModalSort;
