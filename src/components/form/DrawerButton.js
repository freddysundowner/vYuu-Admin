import React, { useContext, useState } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";
import { FiTrash2 } from "react-icons/fi";

const DrawerButton = ({ id, title }) => {
  const { toggleDrawer } = useContext(SidebarContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  return (
    <>
      <div className="fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <Button
            onClick={toggleDrawer}
            className="h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
            layout="outline"
          >
            Cancel
          </Button>
        </div>
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          {process.env.REACT_APP_DEV_STATUS === "true" ? (
            <Button
              onClick={() => {
                setModalOpen(true);
                toggleDrawer();
              }}
              className="w-full h-12"
            >
              {" "}
              {id ? <span>Update {title}</span> : <span>Add {title}</span>}
            </Button>
          ) : (
            <Button type="submit" className="w-full h-12">
              {" "}
              {id ? <span>Update {title}</span> : <span>Add {title}</span>}
            </Button>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
          <span className="flex justify-center text-3xl mb-6 text-red-500">
            <FiTrash2 />
          </span>
          <h2 className="text-xl font-medium mb-1">
            This is demo, update is disabled for{" "}
            <span className="text-red-500">{title}</span> Record?
          </h2>
        </ModalBody>
        <ModalFooter className="justify-center">
          <Button
            className="w-full sm:w-auto hover:bg-white hover:border-gray-50"
            layout="outline"
            onClick={() => {
              setModalOpen(false);
              toggleDrawer();
            }}
          >
            Okay
          </Button>
        </ModalFooter>
      </Modal>
      ;
    </>
  );
};

export default DrawerButton;
