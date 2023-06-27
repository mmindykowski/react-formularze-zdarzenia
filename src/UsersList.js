import { useState } from 'react';
import './UsersList.css';

const UsersList = () => {

    const [username, setUserName] = useState()

  return <div className="usersList">
    <form>
        <label htmlFor="username">User name</label>
        <input type="text" id="username" name="username" placeholder="User name"/>
        <label htmlFor="email">User e-mail</label>
        <input type="email" id="email" name="email" placeholder="User e-mail"/>
        <button>Save</button>
    </form>
  </div>;
};

export default UsersList
