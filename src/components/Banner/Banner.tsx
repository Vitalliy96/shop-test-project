import Image from "next/image";

import welcome from "../../../public/images/welcome.png";

const Banner = () => (
  <div className="flex justify-center">
    <Image src={welcome} width={600} objectFit="contain" alt={"banner"} />
  </div>
);

export default Banner;
