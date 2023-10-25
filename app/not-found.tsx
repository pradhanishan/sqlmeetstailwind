import Image from "next/image";
import fillerImage from "@/public/images/img7.png";
import BackButton from "./components/navigation/BackButton";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center">
      <div className="text-center">
        <h3 className="text-red-600">Page Not Found</h3>
        <span className="text-gray-600 text-sm dark:text-sky-600">Here is a picture of a sad eevee</span>
      </div>
      <div className="overflow-hidden rounded-md shadow-lg w-fit">
        <Image
          src={fillerImage}
          alt="vaporeon umbreon jolteon"
          width={600}
          className="dark:brightness-75" priority
        />
      </div>
      <BackButton href="/"/>
    </main>
  );
}
