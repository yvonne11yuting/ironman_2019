import React from "react";
import withLoading from "../hoc/with_loading";

const UserList = ({ userList }) => {
  return userList.map((user, index) => (
    <div key={index}>
      <img src={user.picture.thumbnail} alt="" />
      <ul style={{display: 'inline-block'}}>
        <li>name: {`${user.name.first} ${user.name.last}`}</li>
        <li>gender: {user.gender}</li>
        <li>email: {user.email}</li>
      </ul>
    </div>
  ));
};

export default withLoading(UserList);
