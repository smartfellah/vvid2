import logoImage from "../../images/svg/logo.svg";
import logoImageActive from "../../images/svg/logo_active.svg";

export function Logo({ isActive }) {
  return isActive ? (
    <img src={logoImageActive} height={48} alt="profile-icon_active" />
  ) : (
    <img src={logoImage} height={48} alt="profile-icon" />
  );
}
