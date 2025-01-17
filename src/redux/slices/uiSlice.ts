import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UiState {
  modals: Record<string, boolean>;
}

const initialState: UiState = {
  modals: {},
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, actions: PayloadAction<string>) => {
      state.modals[actions.payload] = true;
    },

    closeModal: (state, actions: PayloadAction<string>) => {
      state.modals[actions.payload] = false;
    },
  },
});

export const stateModal = (state: RootState) => state.ui.modals;
export const { openModal, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
