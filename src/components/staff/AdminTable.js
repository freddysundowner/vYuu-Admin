import React from "react";
import * as dayjs from "dayjs";
import { TableCell, TableBody, TableRow, Avatar } from "@windmill/react-ui";

import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import AdminDrawer from "../drawer/AdminDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";

const AdminTable = ({ staffs }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <AdminDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {staffs?.map((staff) => (
          <TableRow key={staff._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {" "}
                {staff._id.substring(20, 24)}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{staff.email}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(staff.joiningData).format("MMM D, YYYY")}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">{staff.role}</span>
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={staff._id}
                title={staff.name}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default AdminTable;
