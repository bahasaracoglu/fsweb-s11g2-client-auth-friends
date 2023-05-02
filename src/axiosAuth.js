import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("friends_token");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
