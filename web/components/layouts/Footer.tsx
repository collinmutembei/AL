import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center pt-40 pb-4 bottom-0">
      <Link href="https://azure.microsoft.com/en-us/free/ai/">
        Powered by Azure
      </Link>
    </footer>
  );
};

export default Footer;
