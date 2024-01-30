import requests from "./httpService";

const RoomServices = {
  getAllRooms({ page, limit, title, type,userId }) {
    const searchTitle = title !== null ? title : "";
    const searchType = type !== null ? type : "";
    const id = userId !== null && userId != undefined ? userId : "";
    return requests.get(
      `/rooms/allrooms/paginated?page=${page}&limit=${limit}&title=${searchTitle}&type=${searchType}&userid=${id}`
    );
  },

  getRoomById(id) {
    return requests.get(`/rooms/rooms/${id}`);
  },
  updateRoomById(id, body) {
    return requests.put(`/rooms/rooms/updatenew/${id}`, body);
  },

  deleteRoom(id) {
    return requests.delete(`/rooms/rooms/${id}`);
  },
};

export default RoomServices;
