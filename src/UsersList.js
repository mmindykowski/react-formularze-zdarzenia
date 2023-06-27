import { useState } from 'react';
import './UsersList.css';

const UsersList = () => {

    const [username, setUserName] = useState('')

  return <div className="usersList">
    <h2>{username}</h2>
    <form>
        <label htmlFor="username">User name</label>
        <input type="text" id="username" name="username" placeholder="User name" onChange={(e)=>{setUserName(e.target.value)}}/>
        <label htmlFor="email">User e-mail</label>
        <input type="email" id="email" name="email" placeholder="User e-mail"/>
        <button>Save</button>
    </form>
  </div>;
};

export default UsersList
