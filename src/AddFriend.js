import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function AddFriend() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  function onSubmit(data) {}

  return (
    <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
      <h2 className="text-8xl mb-5 ">ADD FRIEND</h2>
      <form className={"flex flex-col gap-3"} onSubmit={handleSubmit(onSubmit)}>
        <label className={"flex flex-col"}>
          <span className="flex self-start"> FRIEND NAME</span>
          <input
            className="bg-black h-24  text-white"
            defaultValue=""
            {...register("username")}
          ></input>
        </label>
        <label className={"flex flex-col mt-1 "}>
          <span className="flex self-start"> FRIEND MAIL</span>
          <input
            type="email"
            className="bg-black  h-24  text-white"
            defaultValue=""
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
