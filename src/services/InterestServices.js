import requests from "./httpService";

const InterestServices = {
  getAllChannels() {
    return requests.get("/channels");
  },
  getInterest(id) {
    return requests.get(`/interests/all/${id}`);
  },
  getInterestById(id) {
    return requests.get(`/interests/${id}`);
  },
  getChannelsById(id) {
    return requests.get(`/channels/${id}`);
  },

  addChannel(body) {
    return requests.post("/channels", body);
  },
  addInterest(body) {
    return requests.post(`/interests`, body);
  },

  updateInterest(id, body) {
    return requests.put(`/interests/${id}`, body);
  },
  updateChannel(id, body) {
    return requests.put(`/channels/${id}`, body);
  },

  deleteChannel(id) {
    return requests.delete(`/channels/${id}`);
  },
  deleteInterest(id) {
    return requests.delete(`/interests/${id}`);
  },
};

export default InterestServices;
