import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

import { notifySuccess, notifyError } from "../../utils/toast";
import ProductServices from "../../services/ProductServices";
import { SidebarContext } from "../../context/SidebarContext";
import UserServices from "../../services/UserServices";
import ShopServices from "../../services/ShopServices";

const ShowHideButton = ({ id, status, customValue = "", customeKey = "" }) => {
  const location = useLocation();
  const { setIsUpdate } = useContext(SidebarContext);

  const handleChangeStatus = (id, status) => {
    console.log(status);
    notifySuccess("please wait...");
    if (location.pathname === "/users") {
      UserServices.updateUserById(id, { accountDisabled: status })
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("status updated");
        })
        .catch((err) => notifyError(err.message));
    }

    if (location.pathname === "/products") {
      console.log(customeKey);
      if ((customeKey = "feature")) {
        ProductServices.updateProduct(id, { [customeKey]: customValue })
          .then((res) => {
            console.log(res);
            setIsUpdate(true);
            notifySuccess("status updated");
          })
          .catch((err) => notifyError(err.message));
      } else {
        ProductServices.updateProduct(id, { available: !status })
          .then((res) => {
            console.log(res);
            setIsUpdate(true);
            notifySuccess("status updated");
          })
          .catch((err) => notifyError(err.message));
      }
    }

    if (location.pathname === "/shops") {
      ShopServices.updateShop(id, { open: !status })
        .then((res) => {
          console.log(res);
          setIsUpdate(true);
          notifySuccess("status updated");
        })
        .catch((err) => notifyError(err.message));
    }
  };

  return (
    <span
      className="cursor-pointer text-xl flex justify-center text-center"
      onClick={() => handleChangeStatus(id, status)}
    >
      {status == true ? (
        <BsToggleOn className="text-green-500" />
      ) : (
        <BsToggleOff className="text-orange-500" />
      )}
    </span>
  );
};

export default ShowHideButton;
