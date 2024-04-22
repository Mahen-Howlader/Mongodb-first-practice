import { useState } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";

function Users() {
  const usersLoad = useLoaderData();
  const [users, setUsers] = useState(usersLoad);
  const navigate = useNavigate();
  function handeBack() {
    navigate(-1);
  }

  function handelDelete(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete successful user");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  }

  return (
    <div>
      <div>
        <button onClick={handeBack}>Go Back</button>
      </div>
      <div>
        {users.map((user, index) => (
          <div
            style={{ border: "1px solid red", marginTop: "10px" }}
            key={index}
          >
            <h1>{user.userName}</h1>
            <h1>{user.email}</h1>
            <h1>{user._id}</h1>
            <button
              onClick={() => handelDelete(user._id)}
              className="btn bg-red-500"
            >
              Delete
            </button>
            <button className="btn bg-green-500">
              <NavLink to={`/update/${user._id}`}>Update</NavLink>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
