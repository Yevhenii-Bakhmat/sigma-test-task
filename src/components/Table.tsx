import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Issue } from "../models/Issue";
import {
  handleIssueSort,
  selectIssueCount,
  selectIssues,
} from "../store/repository";
import SortingArrow from "./SortingArrow";
import TableRow from "./TableRow";

type Props = {
  className?: string;
};

const Table: FC<Props> = ({ className }) => {
  const issues = useSelector(selectIssues);
  const issueCount = useSelector(selectIssueCount);
  const dispatch = useDispatch();
  const thStyle =
    " text-white bg-[#252937] text-left p-4 first:text-center first:border-l-[0] first:rounded-l-lg last:border-r-[0] last:rounded-r-lg border-x-[1px]";
  const handleHeaderClick = (event: any) => {
    const column = event.target.id;
    dispatch(handleIssueSort(column));
  };
  return (
    <table
      className={`w-11/12 ${className} gap-5 border-separate`}
      cellSpacing={50}
      style={{ borderSpacing: "0 10px" }}
    >
      <thead className="sticky top-0 ">
        <tr>
          <th
            className={`${thStyle} w-[3%]`}
            onClick={handleHeaderClick}
            id="id"
          >
            <SortingArrow column="id" />
          </th>
          <th className={thStyle} onClick={handleHeaderClick} id="title">
            Title
            <SortingArrow column="title" />
          </th>
          <th
            className={`${thStyle} w-[5%]`}
            onClick={handleHeaderClick}
            id="labels"
          >
            Labels
            <SortingArrow column="labels" />
          </th>
          <th
            className={`${thStyle} w-[8%]`}
            onClick={handleHeaderClick}
            id="assignee"
          >
            Assignee
            <SortingArrow column="assignee" />
          </th>
          <th className={`${thStyle} w-[2%]`}>
            <i className="far fa-comment text-white" />
          </th>
        </tr>
      </thead>
      <tbody className="overflow-y-auto">
        {issueCount !== 0
          ? issues.map((issue: Issue) => <TableRow issue={issue} />)
          : null}
      </tbody>
    </table>
  );
};

export default Table;
