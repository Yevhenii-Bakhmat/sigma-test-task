import { FC } from "react";

type Props = {
  name: string;
  color: string;
};

/**
 *
 * @param name label/tag name
 * @param color label/tag background and border color
 * @returns React component for github issue labels/tags
 */
const Label: FC<Props> = ({ name, color }) => {
  return (
    <p
      className="px-2 py-1 rounded-xl text-center m-1 w-fit"
      style={{ border: `1px solid #${color}`, background: `#${color}77` }}
    >
      {name}
    </p>
  );
};

export default Label;
