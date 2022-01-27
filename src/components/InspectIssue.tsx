import { FC } from "react";
import { Issue } from "../models/Issue";
import Label from "./Label";
import { ReactComponent as IssueSVG } from "../assets/issue.svg";
import ReactMarkdown from "react-markdown";
import style from "../styles/InspectIssue.module.scss";
type Props = {
  issue: Issue | null;
};
const StatusIcon = ({ status }: { status?: string }) => {
  switch (status) {
    case "open": {
      return (
        <div className="bg-emerald-500 p-3 rounded-2xl place-items-center flex gap-2 text-xl capitalize">
          <span>{status}</span>
        </div>
      );
    }
    default: {
      return <span>{status}</span>;
    }
  }
};
const InspectIssue: FC<Props> = ({ issue }) => {
  return (
    <div className="max-w-6xl overflow-y-scroll max-h-[90vh] rounded-2xl">
      <div className="bg-[#757391] text-white p-10 sticky top-0">
        <div className="flex gap-3 items-center">
          <StatusIcon status={issue?.status} />
          <h1 className="text-3xl">{issue?.title}</h1>
        </div>
        <div className="flex flex-row w-full">
          {issue?.labels
            .sort((a: any, b: any) => a.name.length - b.name.length)
            .map((item: any) => {
              return <Label name={item.name} color={item.color} />;
            })}
        </div>
      </div>
      <div className={`bg-[#222] text-white px-10 py-5 ${style["markdown"]}`}>
        <ReactMarkdown components={{ pre: "div" }}>
          {issue?.body || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default InspectIssue;
