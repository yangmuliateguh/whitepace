import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import Appsimg from "@/public/img/apps-img.png"

export default function apps() {
  return (
    <div className="bg-secondary w-full px-[220px] py-[140px] text-primary border-2">
        {/* img */}
        <div className="border-2">
            <Image 
              src={Appsimg} 
              width={824}
              height={549}
              priority
              alt="Apps image" 
              className="drop-shadow-lg"
            />
        </div>
        {/* content */}
        <div className="border-2">
          <div className="space-y-[24px]">
            <h1 className="text-[72px] font-semibold ">Work with Your Favorite Apps Using whitepace</h1>
            <p className="text-[18px] ">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
          </div>
          <button className="bg-accent flex items-center py-[16px] px-[24px] mt-[40px] rounded-[10px] text-[18px] text-primary">
            <p className="mr-[10px]">Read more</p> <FaArrowRight />
          </button>
        </div>
    </div>
  );
}
