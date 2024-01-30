import { Badge } from "@windmill/react-ui";
import React, { useState } from "react";
import { useParams } from "react-router";

import useAsync from "../hooks/useAsync";
import MainDrawer from "../components/drawer/MainDrawer";
import useToggleDrawer from "../hooks/useToggleDrawer";
import Loading from "../components/preloader/Loading";
import PageTitle from "../components/Typography/PageTitle";
import ShopServices from "../services/ShopServices";
import ProductDrawer from "../components/drawer/ProductDrawer";

const ShopDetails = () => {
  const { id } = useParams();
  const { handleUpdate } = useToggleDrawer();
  const { data, loading } = useAsync(() => ShopServices.getShopById(id));
  console.log(data);
  return (
    <>
      <MainDrawer>
        <ProductDrawer id={id} />
      </MainDrawer>

      <PageTitle>Shop Details</PageTitle>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="inline-block overflow-y-auto h-full align-middle transition-all transform">
          <div className="flex flex-col lg:flex-row md:flex-row w-full overflow-hidden">
            <div className="flex-shrink-0 flex items-center justify-center h-auto">
              <img src={data.image} width="350" alt={data.name} />
            </div>
            <div className="w-full flex flex-col p-5 md:p-8 text-left">
              <div className="mb-5 block ">
                <div className="font-serif font-semibold py-1 text-sm">
                  <p className="text-sm text-gray-500 pr-4">
                    Status:{" "}
                    {data.open == true ? (
                      <span className="text-green-400">This shop is open</span>
                    ) : (
                      <span className="text-red-400"> This shop is Closed</span>
                    )}
                  </p>
                </div>
                <h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400">
                  {data.name}
                </h2>
              </div>
              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7">
                {data.description}
              </p>
              <div className="flex flex-col mt-4">
                <p className="font-serif font-semibold py-1 text-gray-500 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Location: 
                  </span> 
                  {data.location}
                </p>
              </div>
              {/* <div className="mt-6">
                <button
                  onClick={() => handleUpdate(id)}
                  className="cursor-pointer leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300"
                >
                  Edit Product
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopDetails;
