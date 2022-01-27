import React, { FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFormChange, selectFormData } from "../store/repository";
import { ChangeEvent } from "react";
import Divider from "../components/Divider";
import Input from "../components/Input";
import { useNavigate } from "react-router";

type Props = {
  className?: string;
};
const Search: FC<Props> = ({ className }) => {
  const formData = useSelector(selectFormData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const payload = { value: event.target.value, key: event.target.name };
    dispatch(handleFormChange(payload));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`/${formData.owner}/${formData.repository}`);
    navigate(`/${formData.owner}/${formData.repository}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-row gap-[8px] text-white ${className}`}
    >
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
      <input type={"submit"} hidden />
    </form>
  );
};

export default Search;
