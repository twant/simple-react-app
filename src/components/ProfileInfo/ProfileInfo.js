import React from "react";
import './ProfileInfo.css'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import ProfileText from '../ProfileText/ProfileText'

const ProfileInfo = ( props ) => {
  return (
    <div className="ProfileInfo">
      <ProfilePicture
        image={props.info.profilePicture}
      />
      <ProfileText
        username={props.info.username}
        followers={props.info.followers}
        following={props.info.following}
        posts={props.info.posts}
      />
    </div>
  );
}

export default ProfileInfo