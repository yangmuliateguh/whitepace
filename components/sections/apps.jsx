import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"
import Appsimg from "@/public/img/apps-img.png"
import Appsbg from "@/public/img/apps-bg.png"
import Button from "../ui/button"

export default function apps() {
  return (
    <div className="bg-secondary flex items-center w-full px-[16px] py-[80px] space-x-[100px] text-primary relative">
        <Image 
            src={Appsbg} 
            width={1500}
            priority
            alt="Hero image" 
            className="absolute top-0 left-0 z-0"
          />
        {/* content */}
        <div className="space-y-[100px]">
          {/* img */}
          <Image 
            src={Appsimg} 
            width={582}
            height={470.8}
            priority
            alt="Apps image" 
            className="drop-shadow-lg"
          />
          <div className="space-y-[60px] flex flex-col items-center">
            <div className="space-y-[24px] text-center">
              <h1 className="text-headerh4 font-bold ">Work with Your Favorite Apps Using whitepace</h1>
              <p className="text-p2 ">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
            </div>
            <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Read more</Button>
          </div>
        </div>
    </div>
  );
}
