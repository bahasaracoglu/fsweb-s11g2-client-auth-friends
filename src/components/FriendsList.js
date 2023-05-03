import { useEffect, useState } from "react";
import { axiosWithAuth } from "../axiosAuth";
import { Link } from "react-router-dom";

export default function FriendsList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setList(res.data);
        }
      })
      .catch((error) => console.log(error.response));
  }, []);
  console.log(list);

  return (
    <>
      <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
        <h2 className="text-8xl mb-5 ">FRIENDS LIST</h2>
        <ul className="text-left">
          {list.map((char, i) => (
            <Link key={i} to={`/friends/id/${char.id}`}>
              <li className="mb-4 flex justify-between ">
                <span>
                  {`-${
                    char.name && char.name.toUpperCase()
                  } -    ${char.email.toUpperCase()}`}
                </span>
                <button
                  onClick={() => console.log("silemedim")}
                  className=" flex self-end p-1 bg-black text-white"
                >
                  Delete
                </button>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
