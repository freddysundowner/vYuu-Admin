import React, { useContext } from "react";
import { Button } from "@windmill/react-ui";

import Error from "../components/form/Error";
import LabelArea from "../components/form/LabelArea";
import InputArea from "../components/form/InputArea";
import { AdminContext } from "../context/AdminContext";
import PageTitle from "../components/Typography/PageTitle";
import useSettingsSubmit from "../hooks/useSettingsSubmit";

const ShopifySettings = () => {
  const {
    state: { adminInfo, token },
  } = useContext(AdminContext);

  const { register, handleSubmit, onSubmit, errors } = useSettingsSubmit(
    adminInfo._id
  );

  return (
    <>
      <PageTitle>Shopify Settings</PageTitle>
      <div className="container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Shopify Store Url" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  defaultValue=""
                  label="Shopify Shop Url"
                  name="shopifyUrl"
                  type="shopifyUrl"
                  placeholder="Url"
                />
                <Error errorName={errors.shopifyUrl} />
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label=" Access Token" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  defaultValue=""
                  label="Shopify Access Token "
                  name="shopifyAccessToken"
                  type="shopifyAccessToken"
                  placeholder="security key"
                />
                <Error errorName={errors.shopifyAccessToken} />
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse pr-6 pb-6">
            <Button type="submit" className="h-12 px-6">
              Update Settings
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShopifySettings;
