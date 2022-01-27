import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import InspectIssue from "../components/InspectIssue";
import Modal from "../components/Modal";
import Search from "../components/Search";
import Table from "../components/Table";
import { AppDispatch } from "../store";
import { changeShown, selectData, selectIsShow } from "../store/modal";
import {
  handleFormChange,
  getRepoInfoAsync,
  selectStoreIsEmpty,
} from "../store/repository";

const InspectPage = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const storeIsEmpty = useSelector(selectStoreIsEmpty);
  const isModalOpen = useSelector(selectIsShow);
  const modalData = useSelector(selectData);
  const handleModalClose = () => {
    dispatch(changeShown());
  };

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
    <>
      {isModalOpen ? (
        <Modal onModalClose={handleModalClose}>
          <InspectIssue issue={modalData || null} />
        </Modal>
      ) : null}
      <div className="w-screen h-screen bg-gradient-to-br from-[#0D324D] to-[#7F5A83] overflow-x-hidden">
        <div className="grid grid-cols-1 w-full justify-items-center gap-10">
          <Search className="mt-10" />
          <Table className="" />
        </div>
      </div>
    </>
  );
};

export default InspectPage;
