import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import Extensionimg from "@/public/img/use-extension-img.png"
import Extensionimgbg from "@/public/img/use-extension-img-bg.png"
import Customiseimg from "@/public/img/customise-img.png"
import Yourneedsimgbg from "@/public/img/your-needs-bg.png"
import Button from "../ui/button";

export default function customise() {
  return (
    <div className="w-full text-primary">
      <div className="bg-secondary px-[16px] py-[80px] flex items-center flex-col space-y-[60px] ">
          {/* content */}
          <div className="z-10 flex flex-col items-center space-y-[60px]">
            {/* text */}
            <div className="space-y-[24px] text-center">
              <h1 className="text-headerh4 font-bold relative inline-block">Use as
                <span className="relative z-10"> Extension</span>
                <Image 
                    src={Extensionimgbg} 
                    width={173.13}
                    priority
                    alt="project management" 
                    className="absolute top-0 left-0 z-0"
                />
              </h1>
              <p className="text-p2">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
            </div>
            <Button padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Let's Go</Button>
          </div>
          {/* img */}
          <Image 
            src={Extensionimg} 
            width={284.5}
            priority
            alt="Hero image" 
            className="drop-shadow-lg"
          />
      </div>
      <div className="bg-primary px-[16px] py-[100px] flex items-center flex-col space-y-[60px] text-black ">
          {/* img */}
          <Image 
            src={Customiseimg} 
            width={288}
            priority
            alt="Hero image" 
            className="drop-shadow-lg"
          />
          {/* content */}
          <div className="z-10 flex flex-col items-center space-y-[60px]">
            {/* text */}
            <div className="space-y-[24px] text-center">
              <h1 className="text-headerh4 font-bold relative inline-block">Customise it to
                <span className="relative z-10"> your needs</span>
                <Image 
                    src={Yourneedsimgbg} 
                    width={171.24}
                    priority
                    alt="project management" 
                    className="absolute top-0 left-0 z-0"
                />
              </h1>
              <p className="text-p2">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
            </div>
            <Button className="mt-[40px]" padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Let's Go</Button>
          </div>
      </div>
    </div>
  );
}
