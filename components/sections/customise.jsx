import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import Extensionimg from "@/public/img/use-extension-img.png"
import Customiseimg from "@/public/img/customise-img.png"
import Button from "../ui/button";

export default function customise() {
  return (
    <div className="w-full text-primary">
      <div className="bg-secondary px-[220px] py-[140px] flex items-center space-x-[100px] ">
          {/* content */}
          <div className="z-10 w-[697px]">
            <div className="space-y-[24px]">
              <h1 className="text-[72px] font-semibold ">Use as Extension</h1>
              <p className="text-[18px] ">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
              <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Let's Go</Button>
            </div>
          </div>
          {/* img */}
          <Image 
            src={Extensionimg} 
            width={686}
            height={479}
            priority
            alt="Hero image" 
            className="drop-shadow-lg"
          />
      </div>
      <div className="bg-primary px-[220px] py-[140px] flex items-center space-x-[100px] text-black ">
          {/* img */}
          <Image 
            src={Customiseimg} 
            width={714}
            height={532.09}
            priority
            alt="Hero image" 
            className="drop-shadow-lg"
          />
          {/* content */}
          <div className="z-10 mr-[60px] w-[670px]">
            <div className="space-y-[24px]">
              <h1 className="text-[72px] font-semibold ">Customise it to your needs</h1>
              <p className="text-[18px] ">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
              <Button className="mt-[40px]" padding="normal" variant="accent" rightIcon={<FaArrowRight />}>Let's Go</Button>
            </div>
          </div>
      </div>
    </div>
  );
}
