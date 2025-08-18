import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"
import Appsimg from "@/public/img/apps-img.png"
import Appsbg from "@/public/img/apps-bg.png"
import Button from "../ui/button"

export default function apps() {
  return (
    <div className="bg-secondary flex items-center w-full px-[110px] py-[140px] space-x-[100px] text-primary relative">
        <Image 
            src={Appsbg} 
            width={1500}
            priority
            alt="Hero image" 
            className="absolute top-[4rem] left-[0rem] z-0"
          />
        {/* img */}
        <Image 
          src={Appsimg} 
          width={582}
          height={470.8}
          priority
          alt="Apps image" 
          className="drop-shadow-lg"
        />
        {/* content */}
        <div className="w-[880px] ">
          <div className="space-y-[24px]">
            <h1 className="text-headerh1 font-bold ">Work with Your Favorite Apps Using whitepace</h1>
            <p className="text-p2 ">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
          </div>
          <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Read more</Button>
        </div>
    </div>
  );
}
