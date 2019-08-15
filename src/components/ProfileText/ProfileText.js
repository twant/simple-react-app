import React from "react";
import './ProfileText.css'

const ProfileText = ( props ) => {
  return (
    <div className="ProfileText">
      <p>{props.username}</p>
      <p>Followers: {props.followers}</p>
      <p>Following: {props.following}</p>
      <p>Posts: {props.post}</p>
    </div>
  );
}

export default ProfileText