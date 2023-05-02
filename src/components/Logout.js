import { axiosWithAuth } from "../axiosAuth";

const Logout = () => {
  axiosWithAuth()
    .post("http://localhost:9000/api/logout")
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        localStorage.removeItem("friends_token");
      }
    })
    .catch((error) => console.log(error.response));
};

export default Logout;
