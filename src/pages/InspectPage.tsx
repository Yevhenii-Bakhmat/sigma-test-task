import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch } from "../store";
import {
  handleFormChange,
  getRepoInfoAsync,
  selectStoreIsEmpty,
  selectFormData,
} from "../store/repository";

const InspectPage = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const storeIsEmpty = useSelector(selectStoreIsEmpty);
  const formData = useSelector(selectFormData);

  useEffect(() => {
    console.debug(storeIsEmpty);
    if (storeIsEmpty) {
      Object.entries(params).forEach(([key, value]) => {
        dispatch(handleFormChange({ key, value }));
      });
    }
    dispatch(getRepoInfoAsync());
  }, []);
  return (
    <div className="w-screen h-screen grid place-items-center bg-gradient-to-br from-[#0D324D] to-[#7F5A83]">
      {JSON.stringify(formData)}
    </div>
  );
};

export default InspectPage;
