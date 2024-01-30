import { Badge } from "@windmill/react-ui";
import React, { useContext } from "react";
import { useParams } from "react-router";
import * as dayjs from "dayjs";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Button,
  Card,
  CardBody,
  Pagination,
} from "@windmill/react-ui";
import useAsync from "../hooks/useAsync";
import useToggleDrawer from "../hooks/useToggleDrawer";
import Loading from "../components/preloader/Loading";
import PageTitle from "../components/Typography/PageTitle";
import UserServices from "../services/UserServices";
import ProductServices from "../services/ProductServices";
import { SidebarContext } from "../context/SidebarContext";
import OrderServices from "../services/OrderServices";
import ProductTable from "../components/product/ProductTable";
import OrderTable from "../components/order/OrderTable";

const ProfileDetails = () => {
  const { id } = useParams();
  const { handleUpdate } = useToggleDrawer();

  const {
    currentPage,
    searchText,
    category,
    sortedField,
    limitData,
    status,
    handleChangePage,
    resultsPerPage,
    time,
  } = useContext(SidebarContext);

  const { data, loading } = useAsync(() => UserServices.getUserById(id));
  const products = useAsync(() =>
    ProductServices.getAllProducts({
      page: currentPage,
      limit: limitData,
      category: category,
      title: searchText,
      price: sortedField,
      userid: id,
    })
  );

  const orders = useAsync(() =>
    OrderServices.getAllOrders({
      contact: searchText,
      status,
      page: currentPage,
      limit: resultsPerPage,
      day: time,
      userid: id,
    })
  );

  return (
    <>
      <PageTitle>Profile Details</PageTitle>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="bg-gray-100">
          <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
              <div className="w-full md:w-3/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-green-400">
                  <div className="image overflow-hidden">
                    {data.profilePhoto ? (
                      <img
                        className="h-auto w-full mx-auto"
                        src={data.profilePhoto}
                        alt=""
                      />
                    ) : (
                      <img
                        className="h-auto w-full mx-auto md:w-3/6"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4&usqp=CAU"
                        alt=""
                      />
                    )}
                  </div>
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {data.firstName}
                  </h1>
                  <h1 className="text-gray-900 text-sm leading-8 my-1">
                    @{data.userName}
                  </h1>
                  {data.shopId ? (
                    <h3 className="text-gray-600 font-lg text-semibold leading-6">
                      Owner at {data.shopId.name}.
                    </h3>
                  ) : (
                    ""
                  )}
                  <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    {data.bio}
                  </p>
                  <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    Email {data.email}
                  </p>
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        {data.accountDisabled == true ? (
                          <span className="bg-red-500 py-1 px-2 rounded text-white text-sm">
                            Active
                          </span>
                        ) : (
                          <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                            Active
                          </span>
                        )}
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      <span>Member since</span>
                      <span className="ml-auto">
                        {" "}
                        {dayjs(data.createdAt).format("MMM D, YYYY")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="my-4"></div>
              </div>

              <div className="w-full md:w-9/12 mx-2 h-64">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <PageTitle>Products</PageTitle>
                  <TableContainer className="mb-8 rounded-b-lg">
                    <Table>
                      <TableHeader>
                        <tr>
                          <TableCell>Product name</TableCell>
                          <TableCell>Category</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Stock</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Discount</TableCell>
                          <TableCell>Details</TableCell>
                          <TableCell className="text-center">
                            Published
                          </TableCell>
                          <TableCell className="text-right">Actions</TableCell>
                        </tr>
                      </TableHeader>
                      <ProductTable products={products.data.products} />
                    </Table>
                    <TableFooter>
                      <Pagination
                        totalResults={products?.data?.totalDoc}
                        resultsPerPage={15}
                        onChange={handleChangePage}
                        label="Product Page Navigation"
                      />
                    </TableFooter>
                  </TableContainer>
                </div>

                <PageTitle>Orders</PageTitle>
                <TableContainer className="mb-8">
                  <Table>
                    <TableHeader>
                      <tr>
                        <TableCell>Order Date</TableCell>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Service Fee</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell className="text-center">Status</TableCell>
                        <TableCell className="text-center">Action</TableCell>
                        <TableCell className="text-right">Invoice</TableCell>
                      </tr>
                    </TableHeader>
                    <OrderTable orders={orders.data.orders} />
                  </Table>
                  <TableFooter>
                    <Pagination
                      totalResults={orders.data?.totalDoc}
                      resultsPerPage={resultsPerPage}
                      onChange={handleChangePage}
                      label="Table navigation"
                    />
                  </TableFooter>
                </TableContainer>

                <div className="my-4"></div>
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-12">
                        <span clas="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">
                          Shipping Addresses
                        </span>
                      </div>
                      {data.address == null ? (
                        <></>
                      ) : (
                        <ul className="list-inside space-y-2">
                          <li>
                            <div className="text-teal-600">
                              Address 1: {data.address.addrress1} Address 2:{" "}
                              {data.address.addrress2} City: {data.address.city}{" "}
                              State: {data.address.state}
                            </div>
                            <div className="text-gray-500 text-xs">
                              Phone: {data.address.phone}
                            </div>
                          </li>
                        </ul>
                      )}
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="my-4"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
