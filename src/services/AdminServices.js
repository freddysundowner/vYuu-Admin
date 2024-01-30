import requests from "./httpService";

const AdminServices = {
  registerAdmin(body) {
    return requests.post("/admin/register", body);
  },

  loginAdmin(body) {
    return requests.post(`/admin/login`, body);
  },

  loginUser(body) {
    return requests.post(`/login`, body);
  },
  authenticateUser(body) {
    return requests.post(`/authenticate/social`, body);
  },

  forgetPassword(body) {
    return requests.put("/admin/forget-password", body);
  },

  resetPassword(body) {
    return requests.put("/admin/reset-password", body);
  },

  signUpWithProvider(body) {
    return requests.post("/admin/signup", body);
  },

  addAdmin(body) {
    return requests.post("/admin", body);
  },
  getAllAdmin() {
    return requests.get("/admin");
  },
  getAdminById(id) {
    return requests.get(`/admin/id/${id}`);
  },

  updateAdmin(id, body) {
    return requests.patch(`/admin/${id}`, body);
  },
  deleteAdmin(id) {
    return requests.delete(`/admin/${id}`);
  },
  updateAppSettings(body) {
    return requests.post(`/admin/app/settings`, body);
  },
  getAppSettings() {
    return requests.get(`/admin/app/settings`);
  },
};

export default AdminServices;
