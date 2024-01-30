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
import UserServices from "../services/UserServices";
import Loading from "../components/preloader/Loading";
import PageTitle from "../components/Typography/PageTitle";
import CustomerTable from "../components/customer/CustomerTable";
import { SidebarContext } from "../context/SidebarContext";

const Customers = () => {
  const {
    toggleDrawer,
    currentPage,
    handleChangePage,
    searchText,
    category,
    setCategory,
    searchRef,
    handleSubmitForAll,
    setSearchText,
    sortedField,
    setSortedField,
    limitData,
  } = useContext(SidebarContext);

  const { data, loading } = useAsync(() =>
    UserServices.getAllUsers({
      page: currentPage,
      limit: limitData,
      category: category,

      title: searchText,
      price: sortedField,
    })
  );
  const { serviceData, handleOnDrop, handleUploadProducts } = useFilter(
    data.users
  );

  return (
    <>
      <PageTitle>Users</PageTitle>
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
                placeholder="Search by name"
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
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Joining Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>userName</TableCell>
                <TableCell>Disabled</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <CustomerTable customers={data.users} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={data.totalDoc}
              resultsPerPage={limitData}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="User" />
      )}
    </>
  );
};

export default Customers;
