import { useEffect, useState } from "react";
import "./UsersList.css";

const UsersList = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    usertype: "Admin",
  });

  const [users, setUsers] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  const setUser = (e) => {
    e.preventDefault();
    setUsers(users.concat({ ...formData, id: Date.now() }));
  };

  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const filteredData = (event) => {
    let filter;

    if (event.target.name === "show-users") {
      console.log(event.target.name);
      filter = users.filter((user) => {
        console.log(user.usertype);
        return user.usertype === "User";
      });
    }

    if (event.target.name === "show-admins") {
      filter = users.filter((user) => {
        return user.usertype === "Admin";
      });
    }

    if (event.target.name === "show-all") {
      {
        filter = users;
      }
    }

    console.log(filter);
    setFilteredList(filter);
    // console.log(users);
    // console.log(filter2);
    // setUsers(filter);
    // setUsers(filter2);
  };

  useEffect(() => {
    setFilteredList(users);
  }, [users]);

  return (
    <div className="usersList">
      <form onSubmit={setUser}>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
          value={formData.username}
        />
        <label htmlFor="email">User e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User e-mail"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="usertype">User name</label>
        <select name="usertype" id="usertype" onChange={handleInputChange}>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button>Save</button>
      </form>
      <div>
        <button name="show-users" onClick={(event) => filteredData(event)}>
          Show users
        </button>
        <button name="show-admins" onClick={(event) => filteredData(event)}>
          Show admins
        </button>
        <button name="show-all" onClick={(event) => filteredData(event)}>
          Show all
        </button>
      </div>
      <div className="list">
        {filteredList.map((user) => {
          return (
            <div
              className="userItem"
              key={user.id}
              onClick={() => removeUser(user.id)}
            >
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.usertype}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
