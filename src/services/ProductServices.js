import requests from "./httpService";

const ProductServices = {
  getAllProducts({ page, limit, category, title, price, userid }) {
    const searchCategory = category !== null ? category : "";
    const searchTitle = title !== null ? title : "";
    const searchPrice = price !== null ? price : "";
    const id = userid !== null ? userid : "";

    return requests.get(
      `/products/paginated/allproducts?page=${page}&limit=${limit}&category=${searchCategory}&title=${searchTitle}&price=${searchPrice}&userid=${id}`
    );
  },

  getStockOutProducts() {
    return requests.get("/products/stock-out");
  },

  getProductById(id) {
    return requests.get(`/products/products/${id}`);
  },

  addProduct(body) {
    return requests.post("/products/add", body);
  },

  addAllProducts(body) {
    return requests.post("/products/all", body);
  },

  updateProduct(id, body) {
    return requests.put(`/products/products/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/products/status/${id}`, body);
  },

  deleteProduct(id) {
    return requests.delete(`/products/${id}`);
  },
};

export default ProductServices;
