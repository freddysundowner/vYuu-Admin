import React from "react";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";

const Invoice = ({ data }) => {
  return (
    <>
      <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ">
        {/* {data?.itemId?.map((item, i) => ( */}
        <TableRow key={0} className="dark:border-gray-700 dark:text-gray-400">
          <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
            {data?.itemId.productId.name}
          </TableCell>
          <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
            {data?.itemId.quantity}{" "}
          </TableCell>

          <TableCell className="px-6 py-1 whitespace-nowrap text-center font-bold text-red-500 dark:text-green-500">
            ${data?.itemId.productId.discountedPrice}.00
          </TableCell>
        </TableRow>
        {/* ))} */}
      </TableBody>
    </>
  );
};

export default Invoice;
