import { FC } from "react";
import { Issue } from "../models/Issue";
import Label from "./Label";
import { ReactComponent as IssueSVG } from "../assets/issue.svg";
import ReactMarkdown from "react-markdown";
import style from "../styles/InspectIssue.module.scss";
import StatusIcon from "./StatusIcon";
type Props = {
  issue: Issue | null;
};

const InspectIssue: FC<Props> = ({ issue }) => {
  return (
    <div className="max-w-[90vw] overflow-y-scroll max-h-[90vh] rounded-2xl shadow-[0px_0px_20px_10px_#3534]">
      <div className="bg-[#757391] text-white p-10 pb-5 sticky top-0">
        <div className="flex flex-row gap-3 items-center w-full">
          <StatusIcon status={issue?.status} />
          <h1 className="text-3xl">{issue?.title}</h1>
          <div className="relative right-0">
            {issue?.assignee?.length !== 0 ? (
              <img
                src={(issue as any).assignee[0]["avatar_url"] || ""}
                alt="icon"
                className="rounded-full max-w-[48px]"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-row w-full mt-2">
          {issue?.labels
            .sort((a: any, b: any) => a.name.length - b.name.length)
            .map((item: any) => {
              return <Label name={item.name} color={item.color} />;
            })}
        </div>
      </div>
      <div
        className={`bg-[#252937] text-white px-10 py-5 ${style["markdown"]}`}
      >
        <ReactMarkdown components={{ pre: "div" }}>
          {issue?.body || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default InspectIssue;
