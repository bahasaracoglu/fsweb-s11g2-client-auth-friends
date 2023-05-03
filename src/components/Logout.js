import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../axiosAuth";

const Logout = () => {
  const history = useHistory();
  axiosWithAuth()
    .post("http://localhost:9000/api/logout")
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        localStorage.removeItem("friends_token");
        setTimeout(() => history.push("/"), 3000);
      }
    })
    .catch((error) => console.log(error.response));
  return (
    <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
      <h2>YOU ARE NOW LOGGED OUT!</h2>
      <h3 className="mt-5 text-xl text-slate-500 ">
        REDIRECTING TO LOGIN PAGE...
      </h3>
    </div>
  );
};

export default Logout;
