import { Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <div className={"App font-black text-3xl mx-auto w-1/3 min-w-fit my-4"}>
      <header className="flex border-b-4 border-black">
        <nav className="flex flex-row mb-4">
          <span className="p-6">
            <h1>FRIENDS DATABASE</h1>
          </span>

          <ul className="flex flex-row text-white gap-5">
            <li className=" p-6 bg-black">LOGIN.</li>
            <li className=" p-6 bg-black">FRIENDLIST.</li>
            <li className=" p-6 bg-black">ADDFRIEND.</li>
            <li className=" p-6 bg-black">LOGUT</li>
          </ul>
        </nav>
      </header>
      <Route exact path={["/", "/login"]} component={Login} />
    </div>
  );
}

export default App;
