import { useHistory, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { axiosWithAuth } from "../axiosAuth";

export default function FriendInfo() {
  const [char, setChar] = useState({});
  const { slug } = useParams();

  console.log(slug);
  let history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:9000/api/friends/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setChar(res.data);
        }
      })
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="font-black text-3xl mx-auto w-1/2 min-w-fit mt-20">
      <h2 className="text-8xl mb-5 ">CHARACTER INFO</h2>
      <ul className="flex flex-col  justify-center align-center mx-auto w-2/3">
        <li className="mb-4 flex justify-between ">
          NAME:
          <h2 className="">{char.name}</h2>
        </li>
        <li className="mb-4 flex justify-between ">
          AGE:
          <h2>{char.age}</h2>
        </li>
        <li className="mb-4 flex justify-between ">
          EMAIL
          <h2>{char.email}</h2>
        </li>
      </ul>
    </div>
  );
}
