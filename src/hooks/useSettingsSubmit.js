import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AdminContext } from "../context/AdminContext";
import { notifyError, notifySuccess } from "../utils/toast";
import ShopServices from "../services/ShopServices";

const useSettingsSubmit = (id) => {
  const { state } = useContext(AdminContext);
    const { adminInfo } = state;
    const [shopId, setShopId] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    ShopServices.updateShop(shopId, data)
      .then((res) => {
        notifySuccess("Shop updated Successfully!");
      })
      .catch((err) => notifyError(err.message));
  };

  useEffect(() => {
    if (id) {
      ShopServices.getShopByUserId(id)
        .then((res) => {
            console.log("shop", res);
            setShopId(res._id);
            if (res) {
              setValue("wcSecretKey", res.wcConsumerKey);
              setValue("wcConsumerKey",res.wcSecretKey);
              setValue("wcUrl", res.wcUrl);
              setValue("shopifyUrl", res.shopifyUrl);
              setValue("shopifyAccessToken", res.shopifyAccessToken);
            }
        })
        .catch((err) => {
          // notifyError("There is a server error!");
        });
    }
  }, [id, setValue, adminInfo.email, clearErrors]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useSettingsSubmit;
