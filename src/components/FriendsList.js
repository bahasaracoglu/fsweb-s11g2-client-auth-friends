import { useEffect, useState } from "react";
import { axiosWithAuth } from "../axiosAuth";
import { Link, Route, useParams } from "react-router-dom";

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

  /*
  function handleDelete(data) {
    axiosWithAuth()
      .delete("http://localhost:9000/api/friends", data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          // setList(res.data);
        }
      })
      .catch((error) => console.log(error.response));
  }
*/
  function FriendInfo() {
    const { charId } = useParams();
    const [char, setChar] = useState();

    console.log(list);
    console.log(charId);
    //let history = useHistory();

    /*function handleGeriGit() {
      history.push("/blog");
    }*/

    useEffect(() => {
      list.find((char) => (char.id === charId ? setChar(char) : ""));
    }, [charId]);

    return (
      <div>
        <h2>{char.name}</h2>
        <h2>{char.age}</h2>
        <h2>{char.email}</h2>
      </div>
    );
  }

  return (
    <>
      <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
        <h2 className="text-8xl mb-5 ">FRIENDS LIST</h2>
        <ul className="text-left">
          {list.map((char, i) => (
            <Link key={i} to={`/friends/${char.id}`}>
              <li className="mb-4 flex justify-between ">
                <span>
                  {`-${char.name && char.name.toUpperCase()} - 
          ${char.email.toUpperCase()}`}
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
      <div>
        <Route path="/friends/:charId" element={<FriendInfo />} />
      </div>
    </>
  );
}
