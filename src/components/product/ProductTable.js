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

import Tooltip from "../tooltip/Tooltip";
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import ProductDrawer from "../drawer/ProductDrawer";
import ShowHideButton from "../table/ShowHideButton";
import EditDeleteButton from "../table/EditDeleteButton";
import useToggleDrawer from "../../hooks/useToggleDrawer";

const ProductTable = ({ products }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <ProductDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
        {products?.map((product, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                  src={product.images[0]}
                  alt={product.name}
                />
                <div>
                  <h2 className="text-sm font-medium">{product.name}</h2>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-row">
                {product.interest.map((e) => (
                  <span className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center  px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300">
                    {e.name}
                  </span>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">${product.price}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{product.quantity}</span>{" "}
            </TableCell>
            <TableCell>
              {product.quantity > 0 ? (
                <Badge type="success">Selling</Badge>
              ) : (
                <Badge type="danger">Sold Out</Badge>
              )}
            </TableCell>

            <TableCell>
              <span className="text-sm">{product.discountedPrice}</span>{" "}
            </TableCell>
            <TableCell>
              <Link
                to={`/product/${product._id}`}
                className="flex justify-center text-center text-gray-400 hover:text-green-600"
              >
                <Tooltip
                  id="details"
                  Icon={FiZoomIn}
                  title="Details"
                  bgColor="#10B981"
                />
              </Link>
            </TableCell>
            <TableCell>
              <ShowHideButton id={product._id} status={product.available} />
            </TableCell>
            <TableCell>
              <ShowHideButton
                id={product._id}
                status={product.feature}
                customValue={!product.feature}
                customeKey="feature"
              />
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={product._id}
                title={product.name}
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

export default React.memo(ProductTable);
