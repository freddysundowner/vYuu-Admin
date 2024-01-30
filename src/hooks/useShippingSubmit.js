import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import dayjs from "dayjs";
import { useLocation } from "react-router";

import AdminServices from "../services/AdminServices";
import { AdminContext } from "../context/AdminContext";
import { SidebarContext } from "../context/SidebarContext";
import { notifyError, notifySuccess } from "../utils/toast";

const useShippingSubmit = (id) => {
  const { state } = useContext(AdminContext);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

    const onSubmit = (data) => {
      console.log(data);
  };

  useEffect(() => {
    // if (
    //   location.pathname === "/setting" ||
    //   (location.pathname === "/edit-profile" && Cookies.get("adminInfo"))
    // ) {
    //   const user = JSON.parse(Cookies.get("adminInfo"));
    //   setValue("email", user.email);
    //   setValue("role", user.role);
    //   setImageUrl(user.image);
    //   setSelectedDate(dayjs(user.joiningData).format("YYYY-MM-DD"));
    // }
  }, []);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  };
};

export default useShippingSubmit;
