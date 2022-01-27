import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, RootState } from ".";
import { Issue } from "../models/Issue";
import _ from "lodash";
type FormChangeAction = { key: string; value?: string | number };
enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}
type StateType = {
  owner: string;
  repository: string;
  data: {
    issueCount: number;
    issues: Array<Issue>;
    sortDirection: SortDirection;
  };
  isLoading: boolean;
  error: null | any;
};
const initialState: StateType = {
  owner: "",
  repository: "",
  data: {
    issueCount: 0,
    issues: [],
    sortDirection: SortDirection.DESC,
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
      data: { ...action.payload, sortDirection: SortDirection.DESC },
    }),

    fetchRepoInfoReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: initialState.data,
      error: action.payload,
    }),
    sortRepoInfo: (state, action) => {
      const currentState = {
        ...state,
        data: {
          ...state.data,
          issues: [...state.data.issues],
        },
      };
      const newSortDirection =
        currentState.data.sortDirection === SortDirection.DESC
          ? SortDirection.ASC
          : SortDirection.DESC;
      const sortedIssues = _.orderBy(
        currentState.data.issues,
        [action.payload],
        [newSortDirection]
      ) as Array<Issue>;

      return {
        ...currentState,
        data: {
          ...currentState.data,
          issues: sortedIssues,
          sortDirection: newSortDirection,
        },
      };
    },
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
export const handleFormChange =
  (data: FormChangeAction) => (dispatch: AppDispatch) => {
    dispatch(formChange(data));
  };
export const handleIssueSort = (column?: string) => (dispatch: AppDispatch) => {
  dispatch(sortRepoInfo(column));
};
export const getRepoInfoAsync =
  (query?: string) => async (dispatch: any, getStore: any) => {
    dispatch(fetchRepoInfo());
    const { owner, repository } = getStore().repo;
    axios
      .get(`http://api.github.com/repos/${owner}/${repository}/issues?${query}`)
      .then((response) => {
        const data: Array<any> = response.data;
        const issues = data.map(
          (issue: any, index: number) =>
            new Issue(
              index,
              issue.title,
              issue.labels,
              issue.assignees,
              issue.comments
            )
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
  sortRepoInfo,
} = repository.actions;

export default repository.reducer;
