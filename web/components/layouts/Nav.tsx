import Image from "next/image";
import styles from "@/styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <Image width="50%" height="50%" src={"/logo.png"} alt="logo" />
    </nav>
  );
};

export default Nav;
