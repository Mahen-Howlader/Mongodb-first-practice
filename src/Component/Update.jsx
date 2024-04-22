import { useLoaderData } from "react-router-dom";

function Update() {
  const useloader = useLoaderData();
  function handelUpdate(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updateUser = { name, email };
    console.log(updateUser);
    fetch(`http://localhost:5000/users/${useloader._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser)
    })
      .then((user) => user.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h1>{useloader.name}</h1>
      <form onSubmit={handelUpdate}>
        <input
          type="text"
          name="name"
          defaultValue={useloader?.name}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          defaultValue={useloader?.email}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
        />
        <input defaultValue={Update} type="submit" />
      </form>
    </div>
  );
}

export default Update;
