import React, { useContext } from "react";

import { Pie } from "react-chartjs-2";
import { AdminContext } from "../../context/AdminContext";
import useAsync from "../../hooks/useAsync";
import OrderServices from "../../services/OrderServices";
import ShopServices from "../../services/ShopServices";


const RevenueChart = () => {
  const { state, dispatch } = useContext(AdminContext);
  const { adminInfo } = state;
  const { data, loading } = useAsync(() =>
    ShopServices.getShopByUserId(adminInfo._id).then((res) => {
      console.log(res);
      return OrderServices.getBestSellerProductChart({
        shopid: res._id,
      });
    })
  );

  // const { data } = useAsync(OrderServices.getBestSellerProductChart);

  const PieOption = {
    data: {
      datasets: [
        {
          data: data?.bestSellingProduct?.map((selling) => selling.count),
          backgroundColor: ["#10B981", "#3B82F6", "#F97316", "#0EA5E9"],
          label: "Dataset 1",
        },
      ],
      labels: data?.bestSellingProduct?.map((selling) => selling._id),
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
    },
    legend: {
      display: false,
    },
  };

  return (
    <div>
      <Pie {...PieOption} className="chart" />
    </div>
  );
};

export default RevenueChart;
