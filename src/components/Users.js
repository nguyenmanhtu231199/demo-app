import React from 'react';
import './UserStyle.css';


function Users() {
    return (
        <div className="UsersInfor">
            <form action="/action_page.php">
            <label for="fname">First Name</label>
    <input type="text" id="fname" className="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" className="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" className="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit"></input>
    </form>
        </div>

    );
}

export default Users;