import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <Image width="50%" height="50%" src={"/logo.png"} alt="logo" />
      </Link>
    </nav>
  );
};

export default Nav;
