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

/**
 *
 * @param className class for wraping div element
 * @returns React component that combines owner, divider and repository inputs.
 */
const Search: FC<Props> = ({ className }) => {
  //info stored in redux store
  const formData = useSelector(selectFormData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //function called when user writes info into inputs
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const payload = { value: event.target.value, key: event.target.name };
    dispatch(handleFormChange(payload));
  };

  //function called when user submits the form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
