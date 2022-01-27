import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFormChange, selectFormData } from "../store/repository";
import { AppDispatch } from "../store";
import { ChangeEvent } from "react";
import Divider from "../components/Divider";
import Input from "../components/Input";

type Props = {
  className?: string;
};
const Search: FC<Props> = ({ className }) => {
  const formData = useSelector(selectFormData);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const payload = { value: event.target.value, key: event.target.name };
    dispatch(handleFormChange(payload));
  };
  return (
    <div className={`flex flex-row gap-[8px] text-white ${className}`}>
      <Input
        label="Owner"
        value={formData.owner}
        name="owner"
        onChange={handleInputChange}
      />
      <Divider />
      <Input
        label="Repository"
        value={formData.repository}
        name="repository"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
