import React from "react";
import './ProfilePicture.css'

function ProfilePicture( props ) {
  return (
    <div className="ProfilePicture">
      <img src={props.image}/>
    </div>
  );
}

export default ProfilePicture