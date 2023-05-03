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
  return (
    <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
      <h2>YOU ARE NOW LOGGED OUT!</h2>
    </div>
  );
};

export default Logout;
