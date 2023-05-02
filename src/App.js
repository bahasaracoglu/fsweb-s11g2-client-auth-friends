import { Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import FriendsList from "./FriendsList";
import { Link } from "react-router-dom";
import AddFriend from "./AddFriend";
import axios from "axios";
import { axiosWithAuth } from "./axiosAuth";

function App() {
  const logout = () => {
    axiosWithAuth()
      .post("http://localhost:9000/api/logout")
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.removeItem("friends_token");
          // history.push("/friends");
        }
      })
      .catch((error) => console.log(error.response));
  };

  return (
    <div className={"App font-black text-3xl mx-auto w-1/3 min-w-fit my-4"}>
      <header className="flex border-b-4 border-black">
        <nav className="flex flex-row mb-4">
          <span className="p-6">
            <h1>FRIENDS DATABASE</h1>
          </span>

          <ul className="flex flex-row text-white gap-5">
            <li className=" p-6 bg-black">
              {" "}
              <Link to="/login">LOGIN.</Link>
            </li>
            <li className=" p-6 bg-black">
              <Link to="/friends">FRIENDLIST.</Link>
            </li>
            <li className=" p-6 bg-black">
              <Link to="/friends/add">ADDFRIEND.</Link>
            </li>
            <li onClick={() => logout()} className=" p-6 bg-black">
              <Link to="/logout">LOGOUT</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route exact path={["/", "/login"]} component={Login} />
      <Route exact path="/friends" component={FriendsList} />
      <Route exact path="/friends/add" component={AddFriend} />
    </div>
  );
}

export default App;
