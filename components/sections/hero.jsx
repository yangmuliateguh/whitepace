import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Heroimg from "@/public/img/hero.png"
import Bgimg from "@/public/img/bg-img.png"

export default function hero() {
  return (
    <div className="bg-secondary bg-cover w-full flex items-center px-[220px] py-[140px] text-primary"
      style={{
        backgroundImage : `url(${Bgimg.src})`,
        backgroundSize : '2651.8 547',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat'
      }}
    >
        {/* content */}
        <div className=" z-10">
          <div className="space-y-[24px]">
            <h1 className="text-[64px] font-semibold ">Get More Done with whitepace</h1>
            <p className="text-[18px] ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          </div>
          <button className="bg-accent flex items-center py-[16px] px-[24px] mt-[40px] rounded-[10px] text-[18px] text-primary">
            <p className="mr-[10px]">Try Whitepace Free</p> <FaArrowRight />
          </button>
        </div>
        {/* img */}
        <div className="z-10">
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
