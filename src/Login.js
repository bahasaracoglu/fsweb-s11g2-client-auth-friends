export default function Login() {
  return (
    <div className={"font-black text-3xl mx-auto w-1/3 min-w-fit"}>
      <h2 className="text-8xl ">LOGIN</h2>
      <form className={"flex flex-col gap-3"}>
        <label className={"flex flex-col"}>
          <span className="flex self-start"> USERNAME</span>{" "}
          <input className="bg-black h-24"></input>{" "}
        </label>
        <label className={"flex flex-col "}>
          <span className="flex self-start"> PASSWORD</span>{" "}
          <input className="bg-black  h-24"></input>{" "}
        </label>
        <button className="bg-black h-24 mt-5 text-white">SUBMIT</button>
      </form>
    </div>
  );
}
