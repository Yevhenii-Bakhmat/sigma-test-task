import React, { FC } from "react";
import { Issue } from "../models/Issue";
import { ReactComponent as IssueSVG } from "../assets/issue.svg";
import Label from "./Label";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { changeModalData, changeModalShown } from "../store/modal";
type Props = {
  issue: Issue;
};

const TableRow: FC<Props> = ({ issue }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleTitleClick = () => {
    dispatch(changeModalData(issue));
    dispatch(changeModalShown());
  };

  const tdStyle =
    "text-white bg-[#757391] text-left p-4 first:text-center first:border-l-[0] first:rounded-l-lg last:border-r-[0] last:rounded-r-lg border-x-[1px]";
  return (
    <tr>
      <td className={tdStyle}>
        <IssueSVG fill="#48DC5D" />
      </td>
      <td className={tdStyle} onClick={handleTitleClick}>
        {issue.title.toString()}
      </td>
      <td className={`${tdStyle}`}>
        {issue.labels
          .sort((a: any, b: any) => a.name.length - b.name.length)
          .map((item: any) => {
            return <Label name={item.name} color={item.color} />;
          })}
      </td>
      <td className={tdStyle}>
        <div className="grid place-items-center">
          {issue.assignee?.map((item) => {
            return (
              <img
                src={item["avatar_url"]}
                alt={item["login"]}
                className="rounded-full max-w-[36px]"
              />
            );
          })}
        </div>
      </td>
      <td className={tdStyle}>
        {issue.commentsCount !== 0 && issue.commentsCount}
      </td>
    </tr>
  );
};

export default TableRow;
