import profileIcon from "../../images/svg/user-profile.svg";
import profileIconActive from "../../images/svg/user-profile_active.svg";
import React from "react";

export function ProfileIcon({ isActive }) {
  return isActive ? (
    <>
      <img src={profileIconActive} height={40} alt="profile-icon_active" />
    </>
  ) : (
    <React.Fragment style={{}}>
      <img src={profileIcon} height={40} alt="profile-icon" />
    </React.Fragment>
  );
}
