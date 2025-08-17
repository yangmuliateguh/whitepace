import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import Extensionimg from "@/public/img/use-extension-img.png"
import Customiseimg from "@/public/img/customise-img.png"

export default function customise() {
  return (
    <div className="w-full text-primary">
      <div className="bg-secondary px-[220px] py-[140px] flex items-center border-2">
          {/* content */}
          <div className="z-10 mr-[100px]">
            <div className="space-y-[24px]">
              <h1 className="text-[72px] font-semibold ">Use as Extension</h1>
              <p className="text-[18px] ">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
              <button className="bg-accent flex items-center py-[16px] px-[24px] mt-[40px] rounded-[10px] text-[18px] text-primary">
                <p className="mr-[10px]">Let's Go</p> <FaArrowRight />
              </button>
            </div>
          </div>
          {/* img */}
          <div className="border-2">
              <Image 
                src={Extensionimg} 
                width={1000}
                height={479}
                priority
                alt="Hero image" 
                className="drop-shadow-lg"
              />
          </div>
      </div>
      <div className="bg-primary px-[220px] py-[140px]  flex items-center text-black border-2">
          {/* img */}
          <div className="z-10 mr-[100px] border-2">
            <Image 
              src={Customiseimg} 
              width={1300}
              height={532.09}
              priority
              alt="Hero image" 
              className="drop-shadow-lg"
            />
          </div>
          {/* content */}
          <div className="z-10 mr-[60px]">
            <div className="space-y-[24px]">
              <h1 className="text-[72px] font-semibold ">Customise it to your needs</h1>
              <p className="text-[18px] ">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
              <button className="bg-accent flex items-center py-[16px] px-[24px] mt-[40px] rounded-[10px] text-[18px] text-primary">
                <p className="mr-[10px]">Let's Go</p> <FaArrowRight />
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
