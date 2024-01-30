import React from 'react';
import { Badge } from '@windmill/react-ui';

const Status = ({ status }) => {
  return (
    <>
      <span className="font-serif">
        {status === "completed" && <Badge type="success">{status}</Badge>}
        {status === "pending" && <Badge type="warning">{status}</Badge>}
        {status === "processing" && <Badge>{status}</Badge>}
        {status === "shipped" && <Badge>{status}</Badge>}
        {status === "delivered" && <Badge type="success">{status}</Badge>}
        {status === "cancelled" && <Badge type="danger">{status}</Badge>}
      </span>
    </>
  );
};

export default Status;
