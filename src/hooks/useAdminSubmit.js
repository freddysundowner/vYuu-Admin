import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import dayjs from "dayjs";
import { useLocation } from "react-router";

import AdminServices from "../services/AdminServices";
import { AdminContext } from "../context/AdminContext";
import { SidebarContext } from "../context/SidebarContext";
import { notifyError, notifySuccess } from "../utils/toast";

const useAdminSubmit = (id) => {
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;
  const [imageUrl, setImageUrl] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const location = useLocation();
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const staffData = {
      email: data.email,
      password: data.password,
      joiningDate: selectedDate
        ? selectedDate
        : dayjs(new Date()).format("YYYY-MM-DD"),
      role: data.role,
    };

    if (id) {
      AdminServices.updateAdmin(id, { email: adminInfo.email, data: staffData })
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("Admin Updated Successfully!");
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      AdminServices.addAdmin(staffData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue("email");
      setValue("password");
      setValue("joiningDate");
      setValue("role");
      clearErrors("email");
      clearErrors("password");
      clearErrors("joiningDate");
      clearErrors("role");
      return;
    }
    if (id) {
      AdminServices.getAdminById(id)
        .then((res) => {
          if (res) {
            setValue("email", res.admin.email);
            setValue("password");
            setValue("joiningDate", res.admin.joiningData);
            setValue("role", res.admin.role);
            setSelectedDate(dayjs(res.joiningData).format("YYYY-MM-DD"));
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
  }, [id, setValue, isDrawerOpen, adminInfo.email, clearErrors]);

  useEffect(() => {
    if (
      location.pathname === "/setting" ||
      (location.pathname === "/edit-profile" && Cookies.get("adminInfo"))
    ) {
      const user = JSON.parse(Cookies.get("adminInfo"));
      setValue("email", user.email);
      setValue("role", user.role);
      setImageUrl(user.image);
      setSelectedDate(dayjs(user.joiningData).format("YYYY-MM-DD"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setImageUrl,
    imageUrl,
    selectedDate,
    setSelectedDate,
  };
};

export default useAdminSubmit;
