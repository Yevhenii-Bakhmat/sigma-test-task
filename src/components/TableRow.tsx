import React, { FC } from "react";
import { Issue } from "../models/Issue";
import { ReactComponent as IssueSVG } from "../assets/issue.svg";
type Props = {
  issue: Issue;
};

const TableRow: FC<Props> = ({ issue }) => {
  const tdStyle =
    "text-white bg-[#757391] text-left p-4 first:text-center first:border-l-[0] first:rounded-l-lg last:border-r-[0] last:rounded-r-lg border-x-[1px]";
  return (
    <tr>
      <td className={tdStyle}>
        <IssueSVG fill="#48DC5D" />
      </td>
      <td className={tdStyle}>{issue.title.toString()}</td>
      <td className={tdStyle}>{issue.labels.toString()}</td>
      <td className={tdStyle}>{issue.assignee?.toString()}</td>
      <td className={tdStyle}>{issue.commentsCount.toString()}</td>
    </tr>
  );
};

export default TableRow;
