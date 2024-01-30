import React from "react";
import * as dayjs from "dayjs";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";
import Status from "../table/Status";

const OrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order._id}>
            <TableCell>
              <span className="text-sm">
                {dayjs(order.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>

            <TableCell>
              {" "}
              <span className="text-sm">{order.customerId?.firstName}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                $<span className="text-sm">{order.shippingFee}</span>{" "}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                $<span className="text-sm">{order.servicefee}</span>{" "}
              </span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm font-semibold">
                ${Math.round(order.totalCost)}.00
              </span>{" "}
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm font-semibold">
                {order.ordertype == "WC" ? "Woocommerce" : order.ordertype}
              </span>{" "}
            </TableCell>
            <TableCell>
              <Status status={order.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
