import React from "react";
import { useSelector } from "react-redux";
import { SortDirection } from "../models/SortDirections";
import { selectSortInfo } from "../store/repository";
type Props = {
  column: string;
};

/**
 *
 * @param column string value. Is used to render arrow.
 * @returns React components that showes sorting order and what column is sorted
 */
const SortingArrow: React.FC<Props> = ({ column }) => {
  const { direction, field } = useSelector(selectSortInfo);

  if (column === field) {
    switch (direction) {
      case SortDirection.ASC: {
        return (
          <span className={`text-white`}>
            <i className="fas fa-arrow-up"></i>
          </span>
        );
      }
      case SortDirection.DESC: {
        return (
          <span className={`text-white`}>
            <i className="fas fa-arrow-down"></i>
          </span>
        );
      }
      default:
        break;
    }
  }
  return null;
};

export default SortingArrow;
