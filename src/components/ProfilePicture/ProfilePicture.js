import React from "react";
import './ProfilePicture.css'

const ProfilePicture = ( props ) => {
  return (
    <div className="ProfilePicture">
      <img src={props.image}/>
    </div>
  );
}

export default ProfilePicture