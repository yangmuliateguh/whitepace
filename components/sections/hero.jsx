import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Heroimg from "@/public/img/hero.png"
import Bgimg from "@/public/img/bg-img.png"
import Button from "../ui/button"

export default function hero() {
  return (
    <div className="bg-secondary w-full flex relative text-primary
      px-[16px] 
      py-[80px]
    ">
      <Image 
        src={Bgimg} 
        width={2651.8}
        priority
        alt="Hero image" 
        className="absolute top-[14rem] left-[0rem] z-0"
      />
        {/* content */}
        <div className="w-[288px] z-10 flex flex-col items-center text-center space-y-[100px]">
          <div className="space-y-[60px] flex flex-col items-center">
            <div className="space-y-[24px] ">
              <h2 className="text-headerh4 font-bold ">Get More Done with whitepace</h2>
              <p className="text-p2 ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            </div>
            <Button className="mt-[60px] " padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Try Whitepace Free</Button>
          </div>
          <Image 
            src={Heroimg} 
            width={286}
            priority
            alt="Hero image" 
            className="drop-shadow-lg z-10 "
          />
        </div>
    </div>
  );
}
