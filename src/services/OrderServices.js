import requests from "./httpService";
import { AdminContext } from "../context/AdminContext";
import ShopServices from "./ShopServices";

const OrderServices = {
  getAllOrders({
    body,
    headers,
    contact,
    status,
    page = 1,
    limit = 8,
    day,
    userid = "",
  }) {
    const searchContact = contact !== null ? contact : "";
    const searchStatus = status !== null ? status : "";
    const searchDay = day !== null ? day : "";
    const id = userid !== null ? userid : "";

    return requests.get(
      `/orders/all/orders?contact=${searchContact}&status=${searchStatus}&day=${searchDay}&page=${page}&limit=${limit}&userid=${id}`,
      body,
      headers
    );
  },

  getRecentOrders({
    page = 1,
    limit = 8,
    startDate = "1:00",
    endDate = "23:59",
  }) {
    return requests.get(
      `/orders/recent?page=${page}&limit=${limit}&startDate=${startDate}&endDate=${endDate}`
    );
  },

  getOrderAndSalesChart({ startDate = "1:00", endDate = "23:59" }) {
    return requests.get(
      `/orders/sales/chart?startDate=${startDate}&endDate=${endDate}`
    );
  },

  getBestSellerProductChart({ shopid = "" }) {
    console.log("shopid", shopid);
    return requests.get(
      `/orders/dashboard/orders/best-seller/chart?shopid=${shopid}`
    );
  },

  async getDashboardOrdersData({
    page = 1,
    limit = 8,
    userid = "",
    role = "",
    shopid = "",
  }) {
    const id = userid !== null ? userid : "";
    if (role == "shopowner") {
      return requests.get(
        `/orders/dashboard/orders/shopowner?page=${page}&limit=${limit}&userid=${id}&shopid=${shopid}`
      );
    } else {
      return requests.get(
        `/orders/dashboard/orders?page=${page}&limit=${limit}&userid=${id}`
      );
    }
  },

  getOrderByUser(id, body) {
    return requests.get(`/orders/user/${id}`, body);
  },

  getOrderById(id, body) {
    return requests.get(`/orders/orders/${id}`, body);
  },

  updateOrder(id, body, headers) {
    return requests.put(`/orders/orders/${id}`, body, headers);
  },

  deleteOrder(id) {
    return requests.delete(`/orders/${id}`);
  },
};

export default OrderServices;
