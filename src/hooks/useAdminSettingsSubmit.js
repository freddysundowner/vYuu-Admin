import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import dayjs from "dayjs";
import { useLocation } from "react-router";

import AdminServices from "../services/AdminServices";
import { AdminContext } from "../context/AdminContext";
import { SidebarContext } from "../context/SidebarContext";
import { notifyError, notifySuccess } from "../utils/toast";

const useAdminSettingsSubmit = (id) => {
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;
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
    console.log(data);
    AdminServices.updateAppSettings(data)
      .then((res) => {
        setIsUpdate(true);
        notifySuccess("Admin Updated Successfully!");
      })
      .catch((err) => notifyError(err.message));
  };

  useEffect(() => {
    if (id) {
      AdminServices.getAppSettings(id)
        .then((res) => {
          if (res) {
            var data = res[0];
            setValue("recordedVideoBaseUrl", data.recordedVideoBaseUrl);
            setValue("apiBaseUrl", data.apiBaseUrl);
            setValue("agoraAppRecordKey", data.agoraAppRecordKey);
            setValue("stripepublickey", data.stripepublickey);
            setValue("stripeSecretKey", data.stripeSecretKey);
            setValue("fwPublicKey", data.fwPublicKey);
            setValue("youTubeStreamKey", data.youTubeStreamKey);
            setValue("OneSignalApiKey", data.OneSignalApiKey);
            setValue("oneSignalAppID", data.oneSignalAppID);
            setValue("currency", data.currency);
            setValue("commission", data.commission);
            setValue("fbStreamKey", data.fbStreamKey);
            setValue("agoraAppID", data.agoraAppID);
            setValue("AGORA_CERT", data.AGORA_CERT);
            setValue("AGORA_CUSTOMER_KEY", data.AGORA_CUSTOMER_KEY);
            setValue("AGORA_CUSTOMER_SECRET", data.AGORA_CUSTOMER_SECRET);
            setValue("FLUTTERWAVE_SECRET_KEY", data.FLUTTERWAVE_SECRET_KEY);
            setValue("AWSVENDOR", data.AWSVENDOR);
            setValue("AWSREGION", data.AWSREGION);
            setValue("AWSBUCKET", data.AWSBUCKET);
            setValue("AWSACCESSKEY", data.AWSACCESSKEY);
            setValue("AWSSECRETKEY", data.AWSSECRETKEY);
            setValue("iosVersion", data.iosVersion);
            setValue("androidVersion", data.androidVersion);
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
  }, [id, setValue, isDrawerOpen, adminInfo.email, clearErrors]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useAdminSettingsSubmit;
