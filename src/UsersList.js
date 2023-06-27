import { useState } from "react";
import "./UsersList.css";

const UsersList = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    usertype: "",
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };
  console.log(formData);
  return (
    <div className="usersList">
      <h2>{formData.username}</h2>
      <h2>{formData.email}</h2>
      <h2>{formData.usertype}</h2>
      <form>
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
    </div>
  );
};

export default UsersList;
