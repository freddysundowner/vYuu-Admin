import React from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";

import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import ChannelDrawer from "../drawer/ChannelDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";

const ChannelTable = ({ channels }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <ChannelDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {channels?.map((channel) => (
          <TableRow key={channel._id}>
            <TableCell className="font-medium text-sm">
              <div className="flex flex-row">
                <span className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300">
                  {channel.title}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">{channel.description}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{channel.members_count}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{channel.rooms.length}</span>
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={channel._id}
                title={channel.title}
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

export default ChannelTable;
