import React, { useContext } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Input,
  Card,
  CardBody,
  Pagination,
} from "@windmill/react-ui";

import useAsync from "../hooks/useAsync";
import useFilter from "../hooks/useFilter";
import NotFound from "../components/table/NotFound";
import Loading from "../components/preloader/Loading";
import ShopServices from "../services/ShopServices";
import PageTitle from "../components/Typography/PageTitle";
import { SidebarContext } from "../context/SidebarContext";
import ShopTable from "../components/shops/ShopTable";
import MainDrawer from "../components/drawer/MainDrawer";
import ProductDrawer from "../components/drawer/ProductDrawer";

const Shops = () => {
  const {
    currentPage,
    handleChangePage,
    searchText,
    searchRef,
    handleSubmitForAll,
    limitData,
  } = useContext(SidebarContext);

  const { data, loading } = useAsync(() =>
    ShopServices.getAllShops({
      page: currentPage,
      limit: limitData,
      title: searchText,
    })
  );


  const { serviceData, handleOnDrop, handleUploadProducts } = useFilter(
    data.shops
  );

  return (
    <>
      <PageTitle>Shops</PageTitle>
      <MainDrawer>
        <ProductDrawer />
      </MainDrawer>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitForAll}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                ref={searchRef}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by shop name"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
          </form>
        </CardBody>
      </Card>
      {loading ? (
        <Loading loading={loading} />
      ) : serviceData.length !== 0 ? (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Shop name</TableCell>
                <TableCell>Shop Owner</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Location</TableCell>
                <TableCell className="text-center">Active</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <ShopTable shops={data.shops} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={data?.totalDoc}
              resultsPerPage={limitData}
              onChange={handleChangePage}
              label="Product Page Navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Product" />
      )}
    </>
  );
};

export default Shops;
