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
import RoomseServices from "../services/RoomseServices";
import Loading from "../components/preloader/Loading";
import PageTitle from "../components/Typography/PageTitle";
import RoomsTable from "../components/rooms/RoomsTable";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import { AdminContext } from "../context/AdminContext";
const Customers = () => {
  const { state, dispatch } = useContext(AdminContext);
  const { adminInfo } = state;
  const {
    currentPage,
    handleChangePage,
    searchText,
    category,
    searchRef,
    handleSubmitForAll,
    sortedField,
    limitData,
  } = useContext(SidebarContext);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get("type");
  const { data, loading } = useAsync(() =>
    RoomseServices.getAllRooms({
      page: currentPage,
      limit: limitData,
      category: category,
      type,
      title: searchText,
      price: sortedField,
      userid: adminInfo.role == "shopowner" ? adminInfo._id : "",
    })
  );

  const { serviceData, handleOnDrop, handleUploadProducts } = useFilter(
    data.rooms
  );

  return (
    <>
      <PageTitle>Rooms</PageTitle>
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
                placeholder="Search by title"
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
                <TableCell>Created Date</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Host</TableCell>
                <TableCell>Live Users</TableCell>
                <TableCell>Status</TableCell>
              </tr>
            </TableHeader>
            <RoomsTable rooms={data.rooms} />
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
        <NotFound title="Room" />
      )}
    </>
  );
};

export default Customers;
