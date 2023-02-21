import profileIcon from "../../images/svg/user-profile.svg";
import profileIconActive from "../../images/svg/user-profile_active.svg";

export function ProfileIcon({ isActive }) {
  return isActive ? (
    <img src={profileIconActive} height={64} alt="profile-icon_active" />
  ) : (
    <img src={profileIcon} height={64} alt="profile-icon" />
  );
}
