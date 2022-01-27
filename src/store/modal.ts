import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from ".";
import { Issue } from "../models/Issue";

type InitialStateType = {
  isShown: boolean;
  data: Issue | null;
};
const initialState: InitialStateType = {
  isShown: false,
  data: null,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeData: (state, action) => ({ ...state, data: action.payload }),
    changeShown: (state) => ({ ...state, isShown: !state.isShown }),
  },
});
//Selectors
export const selectIsShow = (state: RootState) => state.modal.isShown;
export const selectData = (state: RootState) => state.modal.data;

//Actions
export const changeModalData = (data: Issue) => (dispatch: AppDispatch) => {
  dispatch(changeData(data));
};
export const changeModalShown = () => (dispatch: AppDispatch) => {
  dispatch(changeShown());
};
export const { changeData, changeShown } = modal.actions;

export default modal.reducer;
