import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Issue } from "../models/Issue";
import { selectIssueCount, selectIssues } from "../store/repository";
import TableRow from "./TableRow";

type Props = {
  className?: string;
};

const Table: FC<Props> = ({ className }) => {
  const issues = useSelector(selectIssues);
  const issueCount = useSelector(selectIssueCount);
  const thStyle =
    " text-white bg-[#252937] text-left p-4 first:text-center first:border-l-[0] first:rounded-l-lg last:border-r-[0] last:rounded-r-lg border-x-[1px]";

  return (
    <table
      className={`w-11/12 ${className} gap-5 border-separate`}
      cellSpacing={50}
      style={{ borderSpacing: "0 10px" }}
    >
      <thead className="sticky top-0 ">
        <tr>
          <th className={`${thStyle} w-[3%]`}></th>
          <th className={thStyle}>Title</th>
          <th className={`${thStyle} w-[5%]`}>Label</th>
          <th className={`${thStyle} w-[5%]`}>Assignee</th>
          <th className={`${thStyle} w-[5%]`}>Comments</th>
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
