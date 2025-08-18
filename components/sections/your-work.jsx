import { FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button"
import Youare from "@/public/img/you-are.png"
import Yourworkbg from "@/public/img/your-work-bg.png"
import Image from "next/image";

export default function yourwork() {
  return (
    <div className="bg-secondary w-full flex flex-col items-center px-[110px] py-[140px] text-primary  relative">
      <Image 
          src={Yourworkbg} 
          width={500}
          priority
          alt="project management" 
          className="absolute top-[-13rem] left-[-8rem] z-0"
      />
      <div className="w-[920px] space-y-[24px] text-center">
        <h1 className="text-headerh1 font-bold relative inline-block">Your work, everywhere 
          <span className="relative z-10"> you are</span>
          <Image
            src={Youare} 
            width={265}
            priority
            alt="project management" 
            className="absolute top-16 left-166 z-0"
          />
        </h1>
        <p className="text-p2 ">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
      </div>
      <Button className="mt-[60px]" padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Try Taskey</Button>
    </div>
  );
}
