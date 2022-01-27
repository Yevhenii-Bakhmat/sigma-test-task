import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, RootState } from ".";
import { Issue } from "../models/Issue";

type FormChangeAction = { key: string; value?: string | number };
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

export const selectStoreIsEmpty = (state: RootState) =>
  state.repo.owner.length === 0;

export const selectIssueCount = (state: RootState) =>
  state.repo.data.issueCount;

export const selectIssues = (state: RootState) => state.repo.data.issues;

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
      const data: Array<any> = response.data;
      const issues = data.map(
        (issue: any) =>
          new Issue(issue.title, issue.labels, issue.assignees, issue.comments)
      );

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
