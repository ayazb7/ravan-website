import AboutUs from "@/components/AboutUs";
import Landing from "@/components/Landing";
import Partners from "@/components/Partners";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col mt-20 pt-5 items-center justify-center bg-black w-full" >
      <Landing />
      <AboutUs />
      <Partners />
    </div>
  );
}
