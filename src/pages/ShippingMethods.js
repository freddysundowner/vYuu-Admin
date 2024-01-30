import React, { useContext, useEffect, useState } from "react";
import { Button, Input } from "@windmill/react-ui";

import Error from "../components/form/Error";
import useAdminSubmit from "../hooks/useAdminSubmit";
import LabelArea from "../components/form/LabelArea";
import InputArea from "../components/form/InputArea";
import { AdminContext } from "../context/AdminContext";
import SelectRole from "../components/form/SelectRole";
import PageTitle from "../components/Typography/PageTitle";
import { FormControlLabel, Switch } from "@mui/material";
import { notifyError, notifySuccess } from "../utils/toast";
import ShopServices from "../services/ShopServices";

const ShippingMethods = () => {
  const {
    state: { adminInfo, token },
  } = useContext(AdminContext);
  const [formFields, setFormFields] = useState([
    { name: "Cash On Delivery", amount: 0, enabled: true },
  ]);

  useEffect(() => {
    if (adminInfo.shopId) {
      ShopServices.getShippingMethods(adminInfo.shopId)
        .then((res) => {
          if (res) {
            console.log(res["data"][0]["shippingMethods"]);
            setFormFields(res["data"][0]["shippingMethods"]);
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
  }, [adminInfo]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
    console.log(data);
    console.log(formFields);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
    ShopServices.saveShippingMethods(adminInfo.shopId, { data: formFields })
      .then((res) => {
        notifySuccess("Updated shipping methods");
      })
      .catch((err) => notifyError(err.message));
  };

  const addFields = () => {
    let object = {
      name: "",
      amount: 0,
      enabled: true,
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <>
      <PageTitle>Shipping Methods</PageTitle>
      <div className="container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
        <Button className="h-10 px-6 mb-5" onClick={addFields}>
          Add +
        </Button>
        <form onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div
                className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6"
                key={index}
              >
                <div className="col-span-4 sm:col-span-2">
                  <Input
                    name="name"
                    placeholder="Name"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.name}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <Input
                    name="amount"
                    placeholder="Amount"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.amount}
                    type="number"
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
                <div className="flex-grow scrollbar-hide w-full">
                  <div className="grid grid-cols-12 gap-3 xl:gap-12 lg:gap-12">
                    <button
                      className="col-span-6 sm:col-span-3"
                      onClick={() => removeFields(index)}
                    >
                      Remove
                    </button>
                    <div className="col-span-4 sm:col-span-4">
                      <input
                        name="enabled"
                        onChange={(event) => handleFormChange(event, index)}
                        type="hidden"
                        value={form.enabled}
                        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            name="enabled"
                            value={form.enabled}
                            checked={form.enabled}
                            onChange={(event) => {
                              let data = [...formFields];
                              data[index]["enabled"] = !form.enabled;
                              setFormFields(data);
                              console.log(data);
                            }}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Enabled"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex flex-row-reverse pr-6 pb-6">
            <Button type="submit" className="h-12 px-6">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );

  // const { register, handleSubmit, onSubmit, errors, imageUrl, setImageUrl } =
  //   useShippingSubmit(adminInfo._id);

  // const [inputFields, setInputFields] = useState([{ name: "", amount: "" }]);

  // const handleFormChange = (index, event) => {
  //   let data = [...inputFields];
  //   data[index][event.target.name] = event.target.value;
  //   setInputFields(data);
  // };
  // const addFields = () => {
  //   let newfield = { name: "", amount: "" };

  //   setInputFields([...inputFields, newfield]);
  // };
  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(inputFields);
  // };

  // return (
  //   <>
  //     <PageTitle>Shipping Methods</PageTitle>
  //     <div className="container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
  //           <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
  //             <LabelArea label="Cash on Delivery" />
  //             <div className="col-span-8 sm:col-span-4">
  //               <FormControlLabel control={<Switch defaultChecked />} />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="p-6 flex-grow scrollbar-hide w-full max-h-full ">
  //           <Button className="h-12 px-6" onClick={addFields}>
  //             Add +
  //           </Button>
  //           <div className="mt-6"></div>
  //           {inputFields.map((input, index) => {
  //             return (
  //               <div
  //                 className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6"
  //                 key={index}
  //               >
  //                 <div className="col-span-4 sm:col-span-3">
  //                   <InputArea
  //                     register={register}
  //                     defaultValue={input.name}
  //                     label="Label Name"
  //                     name="name"
  //                     type="text"
  //                     placeholder="Label Name"
  //                     onChange={(event) => handleFormChange(index, event)}
  //                   />
  //                 </div>
  //                 <div className="col-span-4 sm:col-span-2">
  //                   <InputArea
  //                     register={register}
  //                     defaultValue={input.amount}
  //                     name="amount"
  //                     type="number"
  //                     placeholder="Amount"
  //                     onChange={(event) => handleFormChange(index, event)}
  //                   />
  //                   <Error errorName={errors.role} />
  //                 </div>
  //                 <FormControlLabel control={<Switch defaultChecked />} />
  //               </div>
  //             );
  //           })}
  //         </div>

  //         <div className="flex flex-row-reverse pr-6 pb-6">
  //           <Button type="submit" className="h-12 px-6">
  //             Update Settings
  //           </Button>
  //         </div>
  //       </form>
  //     </div>
  //   </>
  // );
};

export default ShippingMethods;
