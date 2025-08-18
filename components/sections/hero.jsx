import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Heroimg from "@/public/img/hero.png"
import Bgimg from "@/public/img/bg-img.png"
import Button from "../ui/button"

export default function hero() {
  return (
    <div className="bg-secondary w-full flex relative items-center px-[110px] py-[30px]  text-primary">
      <Image 
        src={Bgimg} 
        width={2000}
        priority
        alt="Hero image" 
        className="absolute top-[14rem] left-[0rem] z-0"
      />
        {/* content */}
        <div className="w-[650px] z-10 ">
          <div className="space-y-[24px] ">
            <h2 className="text-headerh2 font-bold ">Get More Done with whitepace</h2>
            <p className="text-p2 ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          </div>
          <Button className="mt-[40px]" padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Try Whitepace Free</Button>
        </div>
        {/* img */}
        <div className="z-10 ">
            <Image 
              src={Heroimg} 
              width={824}
              height={549}
              priority
              alt="Hero image" 
              className="drop-shadow-lg"
            />
        </div>
    </div>
  );
}
