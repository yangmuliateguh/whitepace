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
      <div className="bg-secondary px-[110px] py-[140px] flex items-center space-x-[100px] ">
          {/* content */}
          <div className="z-10 w-[697px]">
            <div className="space-y-[24px]">
              <h1 className="text-headerh1 font-bold relative inline-block">Use as 
                <span className="relative z-10"> Extension</span>
                <Image 
                    src={Extensionimgbg} 
                    width={350}
                    priority
                    alt="project management" 
                    className="absolute top-17 left-34 z-0"
                />
              </h1>
              <p className="text-p2 ">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
              <Button className="mt-[40px]" padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Let's Go</Button>
            </div>
          </div>
          {/* img */}
          <Image 
            src={Extensionimg} 
            width={560}
            priority
            alt="Hero image" 
            className="drop-shadow-lg"
          />
      </div>
      <div className="bg-primary px-[110px] py-[140px] flex items-center space-x-[100px] text-black ">
          {/* img */}
          <Image 
            src={Customiseimg} 
            width={589}
            priority
            alt="Hero image" 
            className="drop-shadow-lg"
          />
          {/* content */}
          <div className="z-10 w-[560px]">
            <div className="space-y-[24px]">
              <h1 className="text-headerh1 font-bold relative inline-block">Customise it to
                <span className="relative z-10"> your needs</span>
                <Image 
                    src={Yourneedsimgbg} 
                    width={540}
                    priority
                    alt="project management" 
                    className="absolute top-31 left-0 z-0"
                />
              </h1>
              <p className="text-p2">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
              <Button className="mt-[40px]" padding="normal" variant="accent" size="medium" rightIcon={<FaArrowRight />}>Let's Go</Button>
            </div>
          </div>
      </div>
    </div>
  );
}
