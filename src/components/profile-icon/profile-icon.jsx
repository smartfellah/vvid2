import profileIcon from "../../images/svg/user-profile.svg";
import profileIconActive from "../../images/svg/user-profile_active.svg";

export function ProfileIcon({ isActive }) {
  return isActive ? (
    <img src={profileIconActive} alt="profile-icon_active" />
  ) : (
    <img src={profileIcon} alt="profile-icon" />
  );
}
