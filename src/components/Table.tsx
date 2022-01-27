import React, { FC } from "react";

type Props = {
  className?: string;
};

const Table: FC<Props> = ({ className }) => {
  const thStyle =
    "text-white bg-[#757391] text-left p-4 first:text-center first:border-l-[0] first:rounded-l-lg last:border-r-[0] last:rounded-r-lg border-x-[1px]";

  return (
    <table className={`w-11/12 ${className}`} cellSpacing={50}>
      <thead>
        <tr>
          <th className={`${thStyle} w-[3%]`}></th>
          <th className={thStyle}>Title</th>
          <th className={`${thStyle} w-[5%]`}>Assignee</th>
          <th className={`${thStyle} w-[5%]`}>Comments</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Table;
