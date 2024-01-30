import React, { useContext } from "react";
import { Button } from "@windmill/react-ui";

import Error from "../components/form/Error";
import useAdminSubmit from "../hooks/useAdminSubmit";
import LabelArea from "../components/form/LabelArea";
import InputArea from "../components/form/InputArea";
import { AdminContext } from "../context/AdminContext";
import SelectRole from "../components/form/SelectRole";
import PageTitle from "../components/Typography/PageTitle";
import useSettingsSubmit from "../hooks/useSettingsSubmit";

const WoocommerceSettings = () => {
  const {
    state: { adminInfo, token },
  } = useContext(AdminContext);

  const { register, handleSubmit, onSubmit, errors } = useSettingsSubmit(
    adminInfo._id
  );
  var validateWebsiteUrl = (websiteUrl) => {
    const urlRegEx =
      "[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?";
    return urlRegEx.test(String(websiteUrl).toLowerCase());
  };

  return (
    <>
      <PageTitle>Woocommerce Settings</PageTitle>
      <div className="container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Woocommerce Shop Url" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  defaultValue=""
                  label="Woocommerce Shop Url"
                  name="wcUrl"
                  type="wcUrl"
                  placeholder="Url"
                />
                <Error errorName={errors.wcUrl} />
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label=" Security Key" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  defaultValue=""
                  label="SecurityKey "
                  name="wcSecretKey"
                  type="wcSecretKey"
                  placeholder="security key"
                />
                <Error errorName={errors.wcSecretKey} />
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Consumer Key" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  defaultValue=""
                  label="ConsumerKey "
                  name="wcConsumerKey"
                  type="wcConsumerKey"
                  placeholder="consumer key"
                />
                <Error errorName={errors.wcConsumerKey} />
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

export default WoocommerceSettings;
