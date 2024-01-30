import requests from "./httpService";

const UserServices = {
  getAllUsers({ page, limit, title }) {
    const searchTitle = title !== null ? title : "";
    return requests.get(
      `/users/allusers?page=${page}&limit=${limit}&title=${searchTitle}`
    );
  },
  getUserById(id) {
    return requests.get(`/users/${id}`);
  },
  updateUserById(id, body) {
    return requests.put(`/users/${id}`, body);
  },

  deleteUser(id) {
    return requests.delete(`/users/${id}`);
  },
};

export default UserServices;
