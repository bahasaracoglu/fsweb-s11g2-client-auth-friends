import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosAuth";
import { nanoid } from "nanoid";

export default function AddFriend() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  //api/friends

  const randomAge = () => {
    return Math.floor(75 * Math.random());
  };

  function onSubmit(data) {
    const updatedData = {
      ...data,
      id: nanoid(),
      age: randomAge(),
    };

    console.log(updatedData);

    axiosWithAuth()
      .post("http://localhost:9000/api/friends", updatedData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);

          //history.push("/friends");
        }
      })
      .catch((error) => console.log(error.response));
  }

  return (
    <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
      <h2 className="text-8xl mb-5 ">ADD FRIEND</h2>
      <form className={"flex flex-col gap-3"} onSubmit={handleSubmit(onSubmit)}>
        <label className={"flex flex-col mt-2"}>
          <span className="flex self-start"> FRIEND NAME</span>
          <input
            className="bg-black h-24  text-white"
            defaultValue=""
            {...register("name")}
          ></input>
        </label>
        <label className={"flex flex-col mt-2"}>
          <span className="flex self-start"> FRIEND EMAIL</span>
          <input
            type="email"
            className="bg-black  h-24  text-white"
            defaultValue=""
            {...register("mail")}
          ></input>
        </label>
        <button type="submit" className="bg-black h-24 mt-5 text-white">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
