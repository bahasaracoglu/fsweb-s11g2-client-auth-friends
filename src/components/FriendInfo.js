// import { useHistory, useParams } from "react-router-dom";

// import { useEffect, useState } from "react";

// export default function FriendInfo(props) {
//   const { list } = props;
//   const { charId } = useParams();
//   const [char, setChar] = useState();

//   console.log(list);
//   console.log(charId);
//   //let history = useHistory();

//   /*function handleGeriGit() {
//       history.push("/blog");
//     }*/

//   useEffect(() => {
//     list.find((char) => (char.id === charId ? setChar(char) : ""));
//   }, [charId]);

//   return (
//     <div>
//       <h2>{char.name}</h2>
//       <h2>{char.age}</h2>
//       <h2>{char.email}</h2>
//     </div>
//   );
// }
