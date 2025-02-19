import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css"; // If you want to style it via CSS

export default function Logo() {
  return <img src={LogoImage} alt="Company Logo" className={styles.logo} />;
}
