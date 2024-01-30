import React from "react";
import { Link } from "react-router-dom";
import {
  TableCell,
  TableBody,
  TableRow,
  Badge,
  Avatar,
} from "@windmill/react-ui";
import { FiZoomIn } from "react-icons/fi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import Tooltip from "../tooltip/Tooltip";
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import ShopDrawer from "../drawer/ShopDrawer";
import ShowHideButton from "../table/ShowHideButton";
import EditDeleteButton from "../table/EditDeleteButton";
import useToggleDrawer from "../../hooks/useToggleDrawer";

const ShopTable = ({ shops }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <ShopDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
        {shops?.map((shop, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <div className="flex items-center">
                {shop.image ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={shop.image}
                    alt={shop.name}
                  />
                ) : (
                  <></>
                )}
                <div>
                  <h2 className="text-sm font-medium">{shop.name}</h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">{shop.userId?.userName}</span>{" "}
            </TableCell>
            <TableCell>
              {shop.open == true ? (
                <Badge type="success">Active</Badge>
              ) : (
                <Badge type="danger">Closed</Badge>
              )}
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm">{shop.location}</span>{" "}
            </TableCell>
            <TableCell>
              <ShowHideButton id={shop._id} status={shop.open} />
            </TableCell>
            <TableCell>
              <div
                onClick={() => handleModalOpen(shop._id, shop.name)}
                className="p-2 cursor-pointer text-gray-400 hover:text-red-600"
              >
                <Tooltip
                  id="delete"
                  Icon={FiTrash2}
                  title="Delete"
                  bgColor="#EF4444"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default React.memo(ShopTable);
