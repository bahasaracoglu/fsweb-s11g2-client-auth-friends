import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { Link } from "react-router-dom";
import AddFriend from "./components/AddFriend";

import PrivateRoute from "./PrivateRoute";
import Logout from "./components/Logout";
import FriendInfo from "./components/FriendInfo";

function App() {
  return (
    <div className={"App font-black text-3xl mx-auto w-1/3 min-w-fit my-4"}>
      <header className="flex border-b-4 border-black">
        <nav className="flex flex-row mb-4">
          <span className="p-6">
            <h1>FRIENDS DATABASE</h1>
          </span>

          <ul className="flex flex-row text-white gap-5">
            <li className=" p-6 bg-black">
              <Link to="/login">LOGIN.</Link>
            </li>
            <li className=" p-6 bg-black">
              <Link to="/friends">FRIENDLIST.</Link>
            </li>
            <li className=" p-6 bg-black">
              <Link to="/friends/add">ADDFRIEND.</Link>
            </li>
            <li onClick={() => Logout()} className=" p-6 bg-black">
              <Link to="/logout">LOGOUT</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route exact path={["/", "/login"]} component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
      <PrivateRoute exact path="/friends/add" component={AddFriend} />
      <PrivateRoute exact path="/friends/id/:slug" component={FriendInfo} />
      <PrivateRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default App;
