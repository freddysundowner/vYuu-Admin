import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/SidebarContext";
import ChannelServices from "../services/ChannelServices";
import { notifyError, notifySuccess } from "../utils/toast";

const useChannelSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, type }) => {
    if (!name) {
      notifyError("name is required!");
      return;
    }
    const channelData = {
      title: name,
    };

    if (id) {
      ChannelServices.updateChannel(id, channelData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("Updated successfully");
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      ChannelServices.addChannel(channelData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("added successfully");
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue("name");
      clearErrors("name");
      return;
    }
    if (id) {
      ChannelServices.getChannelById(id)
        .then((res) => {
          if (res) {
            setValue("name", res.title);
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useChannelSubmit;
