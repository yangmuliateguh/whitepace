import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"
import Appsimg from "@/public/img/apps-img.png"
import Button from "../ui/button"

export default function apps() {
  return (
    <div className="bg-secondary flex items-center w-full px-[220px] py-[140px] space-x-[100px] text-primary ">
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
        <div className="w-[780px] ">
          <div className="space-y-[24px]">
            <h1 className="text-[72px] font-semibold ">Work with Your Favorite Apps Using whitepace</h1>
            <p className="text-[18px] ">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
          </div>
          <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Read more</Button>
        </div>
    </div>
  );
}
