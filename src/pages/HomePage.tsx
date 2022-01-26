import Divider from "../components/Divider";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { handleFormChange, selectFormData } from "../store/repository";
import { AppDispatch } from "../store";
import { ChangeEvent } from "react";
const HomePage = () => {
  const formData = useSelector(selectFormData);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const payload = { value: event.target.value, key: event.target.name };
    dispatch(handleFormChange(payload));
  };

  return (
    <div className="w-screen h-screen grid place-items-center bg-gradient-to-br from-[#0D324D] to-[#7F5A83]">
      <div className=" flex flex-row gap-[8px] text-white">
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
    </div>
  );
};

export default HomePage;
