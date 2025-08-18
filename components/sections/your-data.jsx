import { FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button"
import Yourdata from "@/public/img/your-data-img.png"
import Image from "next/image"
export default function yourdata() {
  return (
    <div className="bg-primary w-full px-[220px] py-[140px] flex items-center text-black">
        {/* content */}
        <div className="w-[800px]">
          <div className="space-y-[24px]">
            <h1 className="text-[72px] font-semibold ">100% your data</h1>
            <p className="text-[18px] ">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
          </div>
          <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Read more</Button>
        </div>
        {/* img */}
        <Image 
            src={Yourdata} 
            width={681}
            height={381.13}
            priority
            alt="Hero image" 
            className="drop-shadow-lg"
          />
    </div>
  );
}
