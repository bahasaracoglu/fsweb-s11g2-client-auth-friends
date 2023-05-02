import axios from "axios";
import { useEffect, useState } from "react";

export default function FriendsList() {
  const [list, setList] = useState([]);
  //const list = [{ name: "BAHA", mail: "BAHA@ASDASD.COM" }];

  const myToken = localStorage.getItem("friends_token");

  const auth = {
    headers: {
      Authorization: myToken,
    },
  };

  console.log(myToken);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", auth)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);

          setList(res.data);
          //history.push("/friends");
        }
      })
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
      <h2 className="text-8xl mb-5 ">FRIENDS LIST</h2>
      <ul className="text-left">
        {list.map((char, i) => (
          <li key={i} className="mb-4">{`-${
            char.name && char.name.toUpperCase()
          } - 
          ${
            //char.mail || c ? char.mail.toUpperCase() : char.email.toUpperCase()
            char.id
          }`}</li>
        ))}
      </ul>
    </div>
  );
}
