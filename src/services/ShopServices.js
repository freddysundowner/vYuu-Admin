import requests from "./httpService";

const ShopServices = {
  getAllShops({ page, limit, title }) {
    const searchTitle = title !== null ? title : "";

    return requests.get(
      `/shop/allshops/paginated?page=${page}&limit=${limit}&title=${searchTitle}`
    );
  },

  getShopById(id) {
    return requests.get(`/shop/shop/${id}`);
  },

  getShopByUserId(id) {
    return requests.get(`/shop/${id}`);
  },
  updateShop(id, body) {
    return requests.put(`/shop/shop/${id}`, body);
  },

  deleteShop(id) {
    return requests.delete(`/shop/shop/${id}`);
  },
  saveShippingMethods(id, body) {
    return requests.post(`/shop/shippingmethods/add/${id}`, body);
  },
  getShippingMethods(id) {
    return requests.get(`/shop/shippingmethods/${id}`);
  },
};

export default ShopServices;
