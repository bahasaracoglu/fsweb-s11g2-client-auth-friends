import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  //localStorage.clear();

  function onSubmit(data) {
    axios
      .post("http://localhost:9000/api/login", data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("friends_token", res.data.token);
          history.push("/friends");
        }
      })
      .catch((error) => console.log(error.response));
  }

  //console.log(userCredentials);

  /*
  const login = () => {
    axios.post("endpoint/here", data).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      //props.history.push("/dashboard");
    });
  };*/
  return (
    <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
      <h2 className="text-8xl mb-5 ">LOGIN</h2>
      <form className={"flex flex-col gap-3"} onSubmit={handleSubmit(onSubmit)}>
        <label className={"flex flex-col"}>
          <span className="flex self-start"> USERNAME</span>
          <input
            className="bg-black h-24  text-white"
            defaultValue="i hate friends"
            {...register("username")}
          ></input>
        </label>
        <label className={"flex flex-col "}>
          <span className="flex self-start"> PASSWORD</span>
          <input
            type="password"
            className="bg-black  h-24  text-white"
            defaultValue="******"
            {...register("password")}
          ></input>
        </label>
        <button type="submit" className="bg-black h-24 mt-5 text-white">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
