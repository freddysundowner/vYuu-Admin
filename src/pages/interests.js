import React, { useContext } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Button,
  Input,
  Card,
  CardBody,
  Pagination,
} from "@windmill/react-ui";
import { FiPlus } from "react-icons/fi";

import { useParams } from "react-router";
import useAsync from "../hooks/useAsync";
import useFilter from "../hooks/useFilter";
import NotFound from "../components/table/NotFound";
import Loading from "../components/preloader/Loading";
import { SidebarContext } from "../context/SidebarContext";
import PageTitle from "../components/Typography/PageTitle";
import MainDrawer from "../components/drawer/MainDrawer";
import InterestServices from "../services/InterestServices";
import InterestTable from "../components/interests/InterestTable";
import InterestDrawer from "../components/drawer/InterestDrawer";

const Interests = () => {
  const { id, title } = useParams();
  const { toggleDrawer } = useContext(SidebarContext);
  const { data, loading } = useAsync(() => InterestServices.getInterest(id));

  const {
    categoryRef,
    setFilter,
    handleChangePage,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleSubmitCategory,
  } = useFilter(data);

  return (
    <>
      <PageTitle>{title} Interests</PageTitle>

      <MainDrawer>
        <InterestDrawer interstsId={id} />
      </MainDrawer>

      <Card className="min-w-0 shadow-xs overflow-hidden dark:bg-gray-800 mb-5">
        <CardBody>
          <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow"></div>

          <div className="w-full md:w-56 lg:w-56 xl:w-56">
            <Button onClick={toggleDrawer} className="w-full rounded-md h-12">
              <span className="mr-3">
                <FiPlus />
              </span>
              Add New
            </Button>
          </div>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Name</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <InterestTable channels={dataTable} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Interest" />
      )}
    </>
  );
};

export default Interests;
