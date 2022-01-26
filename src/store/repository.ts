import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, RootState } from ".";

type FormChangeAction = { key: string; value: string | number };
const initialState = {
  owner: "",
  repository: "",
  data: {
    issueCount: 0,
    issues: [],
  },
  isLoading: false,
  error: null,
};

const repository = createSlice({
  name: "repo",
  initialState,
  reducers: {
    formChange: (state, action: PayloadAction<FormChangeAction>) => ({
      ...state,
      [action.payload.key]: action.payload.value,
    }),

    fetchRepoInfo: (state) => ({
      ...state,
      isLoading: true,
    }),

    fetchRepoInfoResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),

    fetchRepoInfoReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {
        issueCount: 0,
        issues: [],
      },
      error: action.payload,
    }),
  },
});

//Selectors
export const selectFormData = (state: RootState) => ({
  owner: state.repo.owner,
  repository: state.repo.repository,
});

//Actions
export const handleFormChange = (data: FormChangeAction) => (dispatch: any) => {
  dispatch(formChange(data));
};

export const getRepoInfoAsync = () => async (dispatch: any, getStore: any) => {
  dispatch(fetchRepoInfo());
  const { owner, repository } = getStore().repo;
  axios
    .get(`http://api.github.com/repos/${owner}/${repository}/issues`)
    .then((response) => {
      const issues: Array<any> = response.data;
      const newData = {
        issues: issues,
        issueCount: issues.length,
      };
      dispatch(fetchRepoInfoResolve(newData));
    })
    .catch((error) => {
      dispatch(fetchRepoInfoReject(error));
    });
};

export const {
  formChange,
  fetchRepoInfo,
  fetchRepoInfoResolve,
  fetchRepoInfoReject,
} = repository.actions;

export default repository.reducer;
