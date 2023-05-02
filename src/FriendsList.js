export default function FriendsList() {
  const list = [{ name: "BAHA", mail: "BAHA@ASDASD.COM" }];

  return (
    <div className={"font-black text-3xl mx-auto w-1/2 min-w-fit mt-20"}>
      <h2 className="text-8xl mb-5 ">FRIENDS LIST</h2>
      <ul>
        {list.map((char, i) => (
          <li key={i}>{`-${char.name} - ${char.mail}`}</li>
        ))}
      </ul>
    </div>
  );
}
