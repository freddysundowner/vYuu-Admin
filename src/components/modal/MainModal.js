import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";
import { FiTrash2 } from "react-icons/fi";

import UserServices from "../../services/UserServices";
import AdminServices from "../../services/AdminServices";
import ProductServices from "../../services/ProductServices";
import { SidebarContext } from "../../context/SidebarContext";
import { notifySuccess, notifyError } from "../../utils/toast";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import ShopServices from "../../services/ShopServices";
import InterestServices from "../../services/InterestServices";

const MainModal = ({ id, title }) => {
  const { isModalOpen, closeModal, setIsUpdate } = useContext(SidebarContext);
  const { setServiceId } = useToggleDrawer();
  const location = useLocation();

  const handleDelete = () => {
    if (location.pathname === "/products") {
      ProductServices.updateProduct(id, { deleted: true })
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("product deleted successfully");
        })
        .catch((err) => notifyError(err.message));
      closeModal();
      setServiceId();
    }
    if (title === "interests") {
      InterestServices.deleteInterest(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("sub interest deleted");
        })
        .catch((err) => notifyError(err.message));
      closeModal();
      setServiceId();
    }

    if (location.pathname === "/channels") {
      InterestServices.deleteChannel(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("channel deleted");
        })
        .catch((err) => notifyError(err.message));
      closeModal();
      setServiceId();
    }
  
    if (location.pathname === "/shops") {
      ShopServices.deleteShop(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("shop deleted");
        })
        .catch((err) => notifyError(err.message));
      closeModal();
      setServiceId();
    }
    if (location.pathname === "/users") {
      UserServices.deleteUser(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("user deleted");
        })
        .catch((err) => notifyError(err.message));
      closeModal();
      setServiceId();
    }

    if (location.pathname === "/admins") {
      AdminServices.deleteAdmin(id)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("admin deleted");
        })
        .catch((err) => notifyError(err.message));
      closeModal();
      setServiceId();
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
          <span className="flex justify-center text-3xl mb-6 text-red-500">
            <FiTrash2 />
          </span>
          <h2 className="text-xl font-medium mb-1">
            Are You Sure! Want to Delete{" "}
            <span className="text-red-500">{title}</span> Record?
          </h2>
          <p>
            Do you really want to delete these records? You can't view this in
            your list anymore if you delete!
          </p>
        </ModalBody>
        {process.env.REACT_APP_DEV_STATUS === "true" ? (
          <div className="justify-center">
            This is demo, you cannot delete anything
          </div>
        ) : (
          <ModalFooter className="justify-center">
            <Button
              className="w-full sm:w-auto hover:bg-white hover:border-gray-50"
              layout="outline"
              onClick={closeModal}
            >
              No, Keep It
            </Button>

            <Button onClick={handleDelete} className="w-full sm:w-auto">
              Yes, Delete It
            </Button>
          </ModalFooter>
        )}
      </Modal>
    </>
  );
};

export default React.memo(MainModal);
