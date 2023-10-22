import Image from "next/image";

import x from "@/public/images/sprites/aggron.png";

export default function Home() {
  return (
    <div>
      <Image src={x} alt="s" />
    </div>
  );
}
