import Image from "next/image";

import Link from "next/link";

import Logo from "../../../public/images/shopping-logo.png";

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 flex justify-center bg-primary-black border-b-2 border-primary-light-blue shadow-blue rounded-b-1">
    <div className="py-2">
      <Link href={"/"}>
        <Image src={Logo} width={180} objectFit="contain" alt={"logo"} />
      </Link>
    </div>
  </header>
);

export default Header;
