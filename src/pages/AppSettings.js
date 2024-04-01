import React, { useContext } from "react";
import { Button } from "@windmill/react-ui";

import Error from "../components/form/Error";
import LabelArea from "../components/form/LabelArea";
import InputArea from "../components/form/InputArea";
import { AdminContext } from "../context/AdminContext";
import useAdminSettingsSubmit from "../hooks/useAdminSettingsSubmit";

const AppSettings = () => {
  const {
    state: { adminInfo, token },
  } = useContext(AdminContext);

  const { register, handleSubmit, onSubmit, errors } = useAdminSettingsSubmit(
    adminInfo._id
  );

  return (
    <>
      {process.env.REACT_APP_DEV_STATUS === "true" ? (
        <>
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300 w-full max-h-full p-20">
            This is demo you are not allowed to see the settings
          </h1>
        </>
      ) : (
        <div className="container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                Video/Audio Stream settings
              </h1>
              <h2 className="text-sm text-gray-500 dark:text-gray-300">
                Vyuu uses Agora to stream video and Audio, for more information
                refer to agora documentation{" "}
                <a href="https://docs.agora.io/en/" target="_blank">
                  Here
                </a>
              </h2>
              <div className="mt-6"></div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Agora App Id" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="agora app id"
                    required="false"
                    name="agoraAppID"
                    type="agoraAppID"
                    placeholder="agora App ID"
                  />
                  <Error errorName={errors.agoraAppID} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Agora Certificate" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="agora Certificate"
                    required="false"
                    name="AGORA_CERT"
                    type="AGORA_CERT"
                    placeholder="agora certificate key"
                  />
                  <Error errorName={errors.AGORA_CERT} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                Payment Settings
              </h1>
              <div className="mt-6"></div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Stripe Public Key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="stripepublickey"
                    name="stripepublickey"
                    required="false"
                    type="stripepublickey"
                    placeholder="Stripe Public Key"
                  />
                  <Error errorName={errors.stripepublickey} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Stripe Secret Key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="stripeSecretKey "
                    name="stripeSecretKey"
                    required="false"
                    type="stripeSecretKey"
                    placeholder="Stripe Secret Key"
                  />
                  <Error errorName={errors.stripeSecretKey} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Flutter Wave Public Key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="fwPublicKey "
                    required="false"
                    name="fwPublicKey"
                    type="fwPublicKey"
                    placeholder="Flutter Wave Public Key"
                  />
                  <Error errorName={errors.fwPublicKey} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Flutterwave secret key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="Flutterwave secret key"
                    required="false"
                    name="FLUTTERWAVE_SECRET_KEY"
                    type="FLUTTERWAVE_SECRET_KEY"
                    placeholder="Flutterwave secret key"
                  />
                  <Error errorName={errors.FLUTTERWAVE_SECRET_KEY} />
                </div>
              </div>
            </div>

            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                Others
              </h1>
              <div className="mt-6"></div>

              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Youtube Stream Key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="youTubeStreamKey "
                    required="false"
                    name="youTubeStreamKey"
                    type="youTubeStreamKey"
                    placeholder="YouTube Stream Key"
                  />
                  <Error errorName={errors.youTubeStreamKey} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Facebook Stream Key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="fbStreamKey "
                    required="false"
                    name="fbStreamKey"
                    type="fbStreamKey"
                    placeholder="Facebook Stream Key"
                  />
                  <Error errorName={errors.fbStreamKey} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="One Signal App ID" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="oneSignalAppID "
                    required="false"
                    name="oneSignalAppID"
                    type="oneSignalAppID"
                    placeholder="One Signal App ID"
                  />
                  <Error errorName={errors.oneSignalAppID} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="One Signal Api Key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="OneSignalApiKey "
                    required="false"
                    name="OneSignalApiKey"
                    type="OneSignalApiKey"
                    placeholder="One Signal Api Key"
                  />
                  <Error errorName={errors.OneSignalApiKey} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Default Currency" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="currency "
                    required="false"
                    name="currency"
                    type="currency"
                    placeholder="currency"
                  />
                  <Error errorName={errors.currency} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Admin commission (%)" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="commission "
                    name="commission"
                    required="false"
                    type="commission"
                    placeholder="commission"
                  />
                  <Error errorName={errors.commission} />
                </div>
              </div>
            </div>

            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="App Android Latest Version" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="App Android Latest Version"
                    required="false"
                    name="androidVersion"
                    type="appAndroidVersion"
                    placeholder="App Android Latest Version"
                  />
                  <Error errorName={errors.appAndroidVersion} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="App IOS Latest Version" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="App IOS Latest Version"
                    required="false"
                    name="iosVersion"
                    type="appIOSVersion"
                    placeholder="App IOS Latest Version"
                  />
                  <Error errorName={errors.appIOSVersion} />
                </div>
              </div>
            </div>
            {/* <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              {" "}
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                Recording live streams (Optional)
              </h1>
              <div className="mt-6"></div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Agora Customer Key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="agora Customer Key"
                    required="false"
                    name="AGORA_CUSTOMER_KEY"
                    type="AGORA_CUSTOMER_KEY"
                    placeholder="agora consumer key"
                  />
                  <Error errorName={errors.AGORA_CUSTOMER_KEY} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="mt-6"></div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Recorded Video Base Url" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    required="false"
                    label="recordedVideoBaseUrl "
                    name="recordedVideoBaseUrl"
                    type="recordedVideoBaseUrl"
                    placeholder="Recorded Video Base Url"
                  />
                  <Error errorName={errors.recordedVideoBaseUrl} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Agora customer secret" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="agora customer secret"
                    required="false"
                    name="AGORA_CUSTOMER_SECRET"
                    type="AGORA_CUSTOMER_SECRET"
                    placeholder="Agora customer secret"
                  />
                  <Error errorName={errors.AGORA_CUSTOMER_SECRET} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Agora App Record Key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="agoraAppRecordKey "
                    name="agoraAppRecordKey"
                    required="false"
                    type="agoraAppRecordKey"
                    placeholder="Agora App Record Key"
                  />
                  <Error errorName={errors.agoraAppRecordKey} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Aws Vendor" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="aws vendor"
                    required="false"
                    name="AWSVENDOR"
                    type="AWSVENDOR"
                    placeholder="Aws Vendor"
                  />
                  <Error errorName={errors.AWSVENDOR} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Aws Region" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="Aws Region"
                    required="false"
                    name="AWSREGION"
                    type="AWSREGION"
                    placeholder="Aws Region"
                  />
                  <Error errorName={errors.AWSREGION} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Aws bucket" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="Aws bucket"
                    required="false"
                    name="AWSBUCKET"
                    type="AWSBUCKET"
                    placeholder="Aws bucket"
                  />
                  <Error errorName={errors.AWSBUCKET} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Aws access key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="Aws access key"
                    required="false"
                    name="AWSACCESSKEY"
                    type="AWSACCESSKEY"
                    placeholder="Aws access key"
                  />
                  <Error errorName={errors.AWSACCESSKEY} />
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label="Aws secret key" />
                <div className="col-span-8 sm:col-span-4">
                  <InputArea
                    register={register}
                    defaultValue=""
                    label="Aws secret key"
                    required="false"
                    name="AWSSECRETKEY"
                    type="AWSSECRETKEY"
                    placeholder="Aws secret key"
                  />
                  <Error errorName={errors.AWSSECRETKEY} />
                </div>
              </div>
            </div> */}
            <div className="flex flex-row-reverse pr-6 pb-6">
              <Button type="submit" className="h-12 px-6">
                Update Settings
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AppSettings;
