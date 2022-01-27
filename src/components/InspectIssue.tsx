import { FC } from "react";
import { Issue } from "../models/Issue";

type Props = {
  issue: Issue | null;
};

const InspectIssue: FC<Props> = (props) => {
  return <div>{JSON.stringify(props.issue)}</div>;
};

export default InspectIssue;
