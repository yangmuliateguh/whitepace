import { FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button"
import Yourdata from "@/public/img/your-data-img.png"
import Yourdata2 from "@/public/img/your-data.png"
import Image from "next/image"

export default function yourdata() {
  return (
    <div className="bg-primary w-full px-[110px] py-[140px] flex items-center text-black">
        {/* content */}
        <div className="w-[800px]">
          <div className="space-y-[24px]">
            <h1 className="text-headerh1 font-bold relative inline-block">100% 
              <span className="relative z-10"> your data</span>
              <Image 
                src={Yourdata2} 
                width={309}
                priority
                alt="Hero image" 
                className="absolute top-16 left-45 z-0"
              />
            </h1>
            <p className="text-p2 ">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
          </div>
          <Button className="mt-[40px]" padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Read more</Button>
        </div>
        {/* img */}
        <Image 
            src={Yourdata} 
            width={662}
            height={381.13}
            priority
            alt="Hero image" 
            className="drop-shadow-lg"
          />
    </div>
  );
}
