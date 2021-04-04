import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="flex flex-col justify-center items-center m-4">
      <Link href="/" passHref>
        <Image width="50%" height="50%" src={"/logo.png"} alt="logo" />
      </Link>
    </header>
  );
};

export default Nav;
