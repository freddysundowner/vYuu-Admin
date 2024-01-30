import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import { TableCell, TableBody, TableRow, Badge } from "@windmill/react-ui";
import { FiZoomIn, FiTrash2 } from "react-icons/fi";

import Tooltip from "../tooltip/Tooltip";
import MainModal from "../modal/MainModal";
import { SidebarContext } from "../../context/SidebarContext";
import ShowHideButton from "../table/ShowHideButton";

const RoomsTable = ({ rooms }) => {
  const [roomId, setRoomId] = useState("");
  const { toggleModal } = useContext(SidebarContext);
  const [title, setTitle] = useState("");

  const handleModalOpen = (id, title) => {
    setRoomId(id);
    toggleModal();
    setTitle(title);
  };

  return (
    <>
      <MainModal id={roomId} title={title} />
      <TableBody>
        {rooms?.map((room) => (
          <TableRow key={room._id}>
            <TableCell>
              <span className="text-sm">
                {dayjs(room.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{room.title}</span>
            </TableCell>
            <TableCell>
              {room.productIds.length > 0 ? (
                <>
                  <span className="text-sm">{room.productIds[0].name}</span>{" "}
                  <br />${""}
                  <span className="text-sm">{room.productIds[0].price}</span>
                  <span className="text-sm">
                    {room.productIds[0].discount
                      ? `Discounted ${room.productIds[0].discount}`
                      : ""}
                  </span>{" "}
                </>
              ) : (
                <p></p>
              )}
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium">
                {room.hostIds[0]?.firstName} {room.hostIds[0]?.lastName}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium">{room.userIds.length}</span>
            </TableCell>
            <TableCell>
              {room.ended == false ? (
                room.event == true ? (
                  <Badge type="success">Upcoming</Badge>
                ) : (
                  <Badge type="success">Live</Badge>
                )
              ) : (
                <Badge type="danger">Ended</Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default RoomsTable;
