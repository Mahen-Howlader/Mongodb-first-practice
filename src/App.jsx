import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const userName = e.target.user.value;
    const user = { name, email, userName };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert("User successful")
          form.reset()
        }
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto border border-gray-500 p-4 bg-white shadow-md rounded-lg"
      >
        <h1 className="text-2xl mb-4">Register</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="user"
          placeholder="Enter your username"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <button>
      <Link to="/users">User Profile</Link>
      </button>
    </>
  );
}

export default App;
