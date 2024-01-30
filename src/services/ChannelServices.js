import requests from "./httpService";

const ChannelServices = {
  getAllChannel() {
    return requests.get("/club");
  },

  getChannelById(id) {
    return requests.get(`/club/${id}`);
  },

  addChannel(body) {
    return requests.post("/club", body);
  },

  updateChannel(id, body) {
    return requests.put(`/club/${id}`, body);
  },

  deleteChannel(id, body) {
    return requests.delete(`/club/${id}`);
  },
};

export default ChannelServices;
